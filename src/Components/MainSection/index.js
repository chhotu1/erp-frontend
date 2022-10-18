import React from 'react'
import Breadcrumb from '../Breadcrumb';
import CardContainer from '../CardContainer';
const MainSection = (props) => {
    const { breadcrumb, backLink, breadcrumbTitle, cardTitle, link, linkTitle } = props;
    return (
        <main id="main" className="main">
            <Breadcrumb title={breadcrumbTitle} data={breadcrumb ? breadcrumb : []} />
            <CardContainer title={cardTitle} backLink={backLink} link={link ? link : ''} linkTitle={linkTitle ? linkTitle : ''}>
                {props.children}
            </CardContainer>
        </main>
    )
}

export default MainSection
