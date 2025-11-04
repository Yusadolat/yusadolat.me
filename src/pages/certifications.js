import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import styled from 'styled-components'

import Seo from '../components/SEO'
import { media } from '../styles'

const CertificationsWrapper = styled.div`
	padding: 0 15px;
	max-width: 1060px;
	margin: 0 auto;
`

const CertCard = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
	flex-direction: column;
	border-bottom: 1px solid rgb(221, 221, 221);
	padding: 2rem 0px;
	${media.md`
		flex-direction: row;
	`}
	* {
		margin: 0;
	}
`

const CertBadge = styled.div`
	border-radius: 4px;
	overflow: hidden;
	width: 100%;
	max-width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f9f9f9;
	padding: 20px;
	${media.md`
		width: 25%;
	`}
	img {
		width: 100%;
		height: auto;
		max-width: 150px;
		object-fit: contain;
	}
`

const CertInfo = styled.div`
	width: 100%;
	max-width: 560px;
	padding-top: 12px;
	${media.md`
		padding: 0 0 0 40px;
		width: 75%;
		max-width: 100%;
	`}
`

const CertTitle = styled.h3`
	font-family: 'Open Sans', sans-serif;
	color: #282a2d;
	font-size: 1.3em;
	font-weight: 700;
	margin-bottom: 8px;
`

const CertIssuer = styled.p`
	color: #1976d2;
	font-size: 1em;
	font-weight: 600;
	margin: 5px 0;
`

const CertDate = styled.p`
	color: #666d71;
	font-size: 0.9em;
	margin: 5px 0;
`

const CertDescription = styled.p`
	color: #666d71;
	margin: 10px 0 0 0;
	font-size: 0.95em;
	line-height: 1.4;
`

const CertLinks = styled.div`
	margin-top: 12px;
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
`

const CertLink = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 8px 16px;
	background: #f0f0f0;
	color: #333;
	border-radius: 4px;
	text-decoration: none;
	font-size: 0.9em;
	font-weight: 600;
	transition: .3s;
	&:hover {
		background: #1976d2;
		color: white;
	}
`

const Badge = styled.span`
	display: inline-block;
	padding: 4px 10px;
	background: ${props => props.status === 'Active' ? '#4caf50' : '#ff9800'};
	color: white;
	border-radius: 3px;
	font-size: 0.85em;
	font-weight: 600;
	margin-top: 8px;
`

const AwardBadge = styled(Badge)`
	background: ${props => props.status === 'Active' ? '#ffa726' : '#ff9800'};
`

const SectionHeader = styled.h3`
	font-family: 'Open Sans', sans-serif;
	color: #282a2d;
	font-size: 1.5em;
	font-weight: 700;
	margin: 40px 0 20px 0;
	padding-bottom: 10px;
	border-bottom: 2px solid #f0f0f0;
	&:first-child {
		margin-top: 0;
	}
`

class Certifications extends React.Component {
	render() {
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')

		const certifications = [
			{
				title: "AWS Certified DevOps Engineer – Professional",
				issuer: "Amazon Web Services (AWS)",
				date: "August 2024",
				expiryDate: "August 2027",
				status: "Active",
				description: "Validates technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform. Demonstrates ability to implement and manage continuous delivery systems and methodologies on AWS, as well as implement and automate security controls, governance processes, and compliance validation.",
				badge: "https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
				credentialUrl: "https://www.credly.com/badges/678ceb66-db28-45b6-895d-cf53bbe6020e/linked_in_profile",
				verifyUrl: "https://www.credly.com/badges/678ceb66-db28-45b6-895d-cf53bbe6020e/public_url"
			}
		]

		const awards = [
			{
				title: "AWS Community Builder",
				issuer: "Amazon Web Services (AWS)",
				date: "2022",
				status: "Active",
				description: "Member of the AWS Community Builders program, a community of technical enthusiasts and emerging thought leaders who are passionate about sharing knowledge and connecting with the technical community. Selected for expertise in DevOps and Cloud Infrastructure.",
				badge: "https://d1.awsstatic.com/community-builder/AWS-Community-Builder-Logo.1ec61f00a0fa250de5a8266f0a65c4dd5af60fbb.png",
				profileUrl: "https://aws.amazon.com/developer/community/community-builders/",
			},
			{
				title: "HashiCorp Ambassador",
				issuer: "HashiCorp",
				date: "2024",
				status: "Active",
				description: "Recognized as a HashiCorp Ambassador for contributions to the HashiCorp community and expertise in infrastructure automation, particularly with Terraform and Vault. Ambassadors are passionate community members who share their knowledge and help others succeed with HashiCorp tools.",
				badge: "https://www.datocms-assets.com/2885/1620155116-brandhccorporateverticalcolor.svg",
				profileUrl: "https://www.hashicorp.com/",
			}
		]

		return (
			<div className="Certifications">
				<Seo
					title="Certifications & Awards"
					description="Professional certifications, awards, and community recognition in DevOps, Cloud Infrastructure, and Site Reliability Engineering"
					url={`${siteUrl}/certifications`}
				/>
				<section className="HeaderCertifications Page">
					<div className="container">
						<div className="row center-xs">
							<div className="HeaderCertifications__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
								<h2 className="HeaderCertifications__title Page__title">Certifications & Awards</h2>
								<p className="HeaderCertifications__description Page__description">
									Professional certifications, industry awards, and community recognition
									demonstrating expertise in cloud infrastructure, DevOps practices, and site reliability engineering.
								</p>
							</div>
						</div>
					</div>
				</section>
				<CertificationsWrapper>
					<SectionHeader>Professional Certifications</SectionHeader>
					{certifications.map((cert, index) => (
						<CertCard key={index}>
							<CertBadge>
								<img
									src={cert.badge}
									alt={cert.title}
								/>
							</CertBadge>
							<CertInfo>
								<CertTitle>{cert.title}</CertTitle>
								<CertIssuer>{cert.issuer}</CertIssuer>
								<CertDate>Issued: {cert.date}{cert.expiryDate && ` · Expires: ${cert.expiryDate}`}</CertDate>
								<Badge status={cert.status}>{cert.status}</Badge>
								<CertDescription>{cert.description}</CertDescription>
								<CertLinks>
									{cert.credentialUrl && (
										<CertLink href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
											🎓 View Credential
										</CertLink>
									)}
									{cert.verifyUrl && (
										<CertLink href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
											✓ Verify
										</CertLink>
									)}
								</CertLinks>
							</CertInfo>
						</CertCard>
					))}

					<SectionHeader>Awards & Recognition</SectionHeader>
					{awards.map((award, index) => (
						<CertCard key={index}>
							<CertBadge>
								<img
									src={award.badge}
									alt={award.title}
								/>
							</CertBadge>
							<CertInfo>
								<CertTitle>{award.title}</CertTitle>
								<CertIssuer>{award.issuer}</CertIssuer>
								<CertDate>Since {award.date}</CertDate>
								<AwardBadge status={award.status}>{award.status}</AwardBadge>
								<CertDescription>{award.description}</CertDescription>
								<CertLinks>
									{award.profileUrl && (
										<CertLink href={award.profileUrl} target="_blank" rel="noopener noreferrer">
											🏆 View Program
										</CertLink>
									)}
								</CertLinks>
							</CertInfo>
						</CertCard>
					))}
				</CertificationsWrapper>
			</div>
		)
	}
}

export const queryCertifications = graphql`
  	query QueryCertifications {
   	site {
      	siteMetadata {
            title
            siteUrl
      	}
    	}
   	}
`

export default Certifications
