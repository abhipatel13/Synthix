import Link from "next/link";
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function HomeHero( {block, dataBinding}) {
	return (
		<section className="hero-two" data-cms-bind={dataBinding}>
            <div className="hero-two-shape"></div>
            <div className="container-fluid">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hero-two-content">
                    <h1 className="mb-4">{block.title}</h1>
                    <div className="mb-7 w-xxl-80"dangerouslySetInnerHTML={{ __html: md.render(block.description) }}></div>
                    <div className="">
                        { block.button &&
                            <Link href={block.button.link} className="btn btn-primary btn-lg"> {block.button.text} </Link>
                        }
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero-two-banner">
                    <img src={block.image} alt={block.image_alt} style={{ "width":"99%", "borderRadius":'10%','boxShadow':'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
                    <div className="hero-two-banner-shape"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
	);
}
