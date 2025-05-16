import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ItemWrapper = styled(Link)`
	cursor: pointer;
	text-align: left;
	text-decoration: none;
`

const CoverWrapper = styled.div`
	position: relative;
	overflow: hidden;
	box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
	margin-bottom: 13px !important;
  ${ItemWrapper}:hover & {
  	box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;
    transform: translateY(-3px);
  }
`

const Title = styled.h3`
	color: #22292f;
	font-family: 'Open Sans', serif;
	font-size: 19px;
	text-align: left;
	width: 100%;
	display: inline;
	margin: 0;
	${ItemWrapper}:hover & {
  	color: #1976d2;
  	box-shadow: #DCE7F3 0px -4px 0px 0px inset;  	
  }
`

const TopBar = styled.div`
	height: 26px;
	background: #e0e3e6;
	width: 100%;
	display: flex;
	align-items: center;
	border-radius: 4px 4px 0 0;

	.TopBarButtons {
		background: white;
		border-radius: 50%;
		height: 9px;
		width: 9px;
		position: relative;
		margin-left: 5px;
		&:after {
			content: '';
			    background: white;
			    border-radius: 50%;
			    position: absolute;
			    left: 260%;
			    top: 0;
			    height: 9px;
			    width: 9px;

		}

		&:before {
			content: '';
			background: white;
			border-radius: 50%;
			height: 9px;
			width: 9px;
			position: absolute;
			left: 130%;
			top: 0;
		}
	}
`

const ItemLink = styled.article`
`

const TagsWrapper = styled.div`
	text-align: left;
	flex-wrap: wrap;	
	display: flex;
	.tag_icon {
		width: 18px;
		position: relative;		
		path {
			fill: #4E4E4E;
		}
	}
`

const Tag = styled(Link)`
	padding: 2px 7px;
	background: #F7F7F7;
	color: #6A6A6A;
	border-radius: 3px;
	text-decoration: none;
	margin: 0 2px;
	font-size: 13px;
	font-weight: 600;
	display: inline-block;
	text-transform: capitalize;
	&:hover {
		background: #E2E2E2;
	}
`

const ShortcutIcons = styled.div`	
	display: flex;	
	justify-content: flex-end;
	width: 46px;
	a {
		margin-left: 7px;
		display: flex;
	}
	.Shortcut__icon {
		path {
			fill: #9E9E9E;
		}

		&:hover {
			path {
				fill: #1976d2;
			}			
		}
	}
`

const BottomData = styled.div`
	display: flex;	
	margin: 10px 0;
	justify-content: space-between;	
`

const PortfolioItem = props => (
  <ItemLink>
    <ItemWrapper to={props.data.path}>
      <CoverWrapper>
        <TopBar>
          <div className="TopBarButtons"></div>
        </TopBar>
        <img src={props.data.thumbnail} alt={props.data.title} style={{ width: '100%', height: 'auto' }} />
      </CoverWrapper>
      <div>
        <Title>{props.data.title}</Title>
      </div>
    </ItemWrapper>
    <BottomData>
      <TagsWrapper className="PortfolioItem__tagswrapper">
        <svg
          className="icon_svg tag_icon"
          version="1.1"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Tags</title>
          <path d="M33.16,19.13,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L31.75,20.45,21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" />
          <circle cx="7.81" cy="11.14" r="1.33" />
          <path d="M27.78,19.17,14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17ZM17.26,29.69,3.69,16.15V7h9.1L26.37,20.48Z" />
          <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
        </svg>
        {props.data.tags.map((value, index) => {
          return (
            <Tag key={index} title={`Ver todos los proyectos en ${value}`}>
              {" " + value}
            </Tag>
          );
        })}
      </TagsWrapper>
      <ShortcutIcons>
        <a
          title="See code on Repository"
          href={props.data.repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="Shortcut__icon"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            height="17px"
            width="17px"
            viewBox="0 0 40 40"
            style={{ verticalAlign: "text-top" }}
          >
            <g>
              <path d="m23.4 5h11.6v11.6h-3.4v-5.9l-16.3 16.3-2.3-2.3 16.3-16.3h-5.9v-3.4z m8.2 26.6v-11.6h3.4v11.6q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h11.6v3.4h-11.6v23.2h23.2z" />
            </g>
          </svg>
        </a>
        {props.data.website && (
          <a
            title="Ver sitio"
            href={props.data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="Shortcut__icon"
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="17px"
              width="17px"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "text-top" }}
            >
              <g>
                <path d="m23.4 5h11.6v11.6h-3.4v-5.9l-16.3 16.3-2.3-2.3 16.3-16.3h-5.9v-3.4z m8.2 26.6v-11.6h3.4v11.6q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h11.6v3.4h-11.6v23.2h23.2z" />
              </g>
            </svg>
          </a>
        )}
      </ShortcutIcons>
    </BottomData>
  </ItemLink>
);

export default PortfolioItem;