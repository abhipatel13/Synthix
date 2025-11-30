import Link from "next/link";
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function CTA({ block, dataBinding }) {
	return (
		<section className="cta cta-two" data-cms-bind={dataBinding}>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<div className="section-header">
							{block.title && (
								<h2>{block.title}</h2>
							)}
							{block.description && (
								<div dangerouslySetInnerHTML={{ __html: md.render(block.description) }} />
							)}
							{block.button && (
								<div className="mt-4">
									<Link href={block.button.link} className="btn btn-primary btn-lg">
										{block.button.text}
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
