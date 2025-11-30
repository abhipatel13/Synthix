import components from '../../components/**/*.jsx';

const getComponentKey = (name) => {
    return `../../components/${name}.jsx`;
};

function Blocks({ children, content_blocks }) {
    return <>
        {content_blocks.map((block, i) =>{
            const newDataBinding = `#content_blocks.${i}`
            const componentPath = getComponentKey(block._bookshop_name);
            
            // Create multiple possible path patterns to match
            const bookshopName = block._bookshop_name;
            const possiblePaths = [
                componentPath, // ../../components/global/skills.jsx
                `components/${bookshopName}.jsx`, // components/global/skills.jsx
                `./components/${bookshopName}.jsx`, // ./components/global/skills.jsx
                `/${bookshopName}.jsx`, // /global/skills.jsx
            ];
            
            // Find component by checking if key matches any of the possible paths
            const TargetComponent = Object.entries(components).find(([key]) => {
                // Normalize paths for comparison (remove leading ./ or ../)
                const normalizedKey = key.replace(/^(\.\.?\/)+/, '');
                const normalizedBookshop = bookshopName.replace(/\//g, '/');
                
                // Check if key ends with any of the possible paths
                return possiblePaths.some(path => {
                    const normalizedPath = path.replace(/^(\.\.?\/)+/, '');
                    return key.endsWith(path) || normalizedKey.endsWith(normalizedPath);
                }) || 
                // Also check if key contains the component name
                key.includes(`/${normalizedBookshop}.jsx`) ||
                key.endsWith(`/${bookshopName}.jsx`);
            })?.[1]?.default;

            if (!TargetComponent) {
                // Debug: log available component keys for troubleshooting
                const availableKeys = Object.keys(components);
                console.error(`Component not found for ${block._bookshop_name}`);
                console.error(`Looking for path: ${componentPath}`);
                console.error(`Available component keys (first 10):`, availableKeys.slice(0, 10));
                throw new Error(`Component not found for ${block._bookshop_name}: ${componentPath}. Available keys: ${availableKeys.slice(0, 5).join(', ')}...`);
            }
            return (
                <TargetComponent block={block} dataBinding={newDataBinding} key={i}/>
            );
        })}    
    </>
}

export default Blocks;