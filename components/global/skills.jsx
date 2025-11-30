export default function Skills({ block, dataBinding }) {
	const skillsData = block.skills || [];

	return (
		<section className="skills-section" data-cms-bind={dataBinding}>
			<div className="container">
				{block.title && (
					<div className="row mb-5">
						<div className="col-12 text-center">
							<h2 className="section-title">
								{block.title}
								{block.title_suffix && <span className="text-primary"> {block.title_suffix}</span>}
							</h2>
							{block.description && (
								<p className="section-description mt-3">{block.description}</p>
							)}
						</div>
					</div>
				)}

				<div className="row">
					{skillsData.map((category, categoryIndex) => (
						<div key={categoryIndex} className="col-lg-6 col-md-6 mb-5">
							<div className="skill-category-card">
								<h3 className="skill-category-title">
									{category.category_name}
								</h3>
								{category.subcategories && category.subcategories.map((subcategory, subIndex) => (
									<div key={subIndex} className="skill-subcategory mt-4">
										<h4 className="skill-subcategory-title">
											{subcategory.subcategory_name}
										</h4>
										<ul className="skill-list">
											{subcategory.skills && subcategory.skills.map((skill, skillIndex) => (
												<li key={skillIndex} className="skill-item">
													<span className="skill-badge">
														<i className="ph-check-circle" style={{marginRight: '8px', color: '#1a1a2e'}}></i>
														{skill}
													</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
