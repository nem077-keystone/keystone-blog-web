import styled from 'styled-components'
import LayoutLink from '../shared/LayoutLink'
import { layoutTokens } from '../styles/tokens'

const mobile = '@media (max-width: 1000px)'

export const FooterRoot = styled.footer`
  ${layoutTokens}
  padding: 96px 0 24px;
  color: var(--layout-fg);
  background: var(--layout-bg);
  border-top: 1px solid var(--layout-bg-slight);
  font-family: var(--font-open-sans), 'Open Sans', sans-serif;

  &,
  & * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li,
  p,
  h2 {
    margin: 0;
    padding: 0;
  }

  ${mobile} {
    padding: 96px 24px 24px;
  }
`

export const FooterContainer = styled.div`
  width: min(calc(100% - 48px), var(--layout-content-width));
  margin: 0 auto;

  ${mobile} {
    width: 100%;
  }
`

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  align-items: start;

  ${mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`

export const Brand = styled.div`
  width: 280px;
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > img {
    width: 48px;
    height: 48px;
  }

  ${mobile} {
    width: 100%;
    flex-basis: auto;
  }
`

export const Slogan = styled.p`
  margin-top: 24px !important;
  white-space: pre-line;
  color: var(--layout-fg);
  font-family: var(--font-montserrat), Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`

export const FooterNavigation = styled.nav`
  flex: 0 1 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 80px;

  ${mobile} {
    margin-top: 16px;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 34px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const FooterGroup = styled.section`
  min-width: 0;

  h2 {
    margin-bottom: 24px;
    color: var(--layout-fg-muted);
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.04em;
  }

  li + li {
    margin-top: 8px;
  }

  ${mobile} {
    margin-top: 48px;

    h2 {
      font-size: 14px;
      line-height: 22px;
    }
  }
`

export const FooterLink = styled(LayoutLink)`
  color: var(--layout-fg-subtle);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  transition: var(--layout-transition);

  &:hover,
  &:focus-visible {
    color: var(--layout-fg);
  }

  ${mobile} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
  }
`

export const ContactDetails = styled.details`
  position: relative;
  margin-top: 85px;

  summary {
    min-height: 40px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--layout-border);
    gap: 8px;
    border-radius: 2px;
    color: var(--layout-fg);
    background: var(--layout-bg-subtle);
    cursor: pointer;
    font-size: 14px;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  ${mobile} {
    margin-top: 40px;
  }
`

export const ContactList = styled.ul`
  position: absolute;
  left: 0;
  bottom: 48px;
  z-index: 2;
  min-width: 230px;
  padding: 12px !important;
  border: 1px solid var(--layout-border);
  border-radius: 6px;
  background: var(--layout-bg-subtle);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);

  li + li {
    margin-top: 4px;
  }

  a {
    padding: 8px;
    display: block;
    border-radius: 4px;
    color: var(--layout-fg-muted);
    font-size: 14px;
  }

  a:hover,
  a:focus-visible {
    color: var(--layout-fg);
    background: var(--layout-bg-slight);
  }
`

export const UtilityRow = styled.div`
  min-height: 48px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  ${mobile} {
    min-height: 0;
    flex-direction: column;
    align-items: center;
  }
`

export const UtilityLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 18px;
    height: 18px;
  }
`

export const SocialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  ${mobile} {
    margin-top: 48px;
    gap: 16px;
  }
`

export const SocialLink = styled(LayoutLink)`
  position: relative;
  width: 24px;
  height: 24px;
  display: inline-flex;

  img {
    position: absolute;
    inset: 0;
    width: 24px;
    height: 24px;
    transition: var(--layout-transition);
  }

  img:last-child {
    opacity: 0;
  }

  &:hover img:first-child,
  &:focus-visible img:first-child {
    opacity: 0;
  }

  &:hover img:last-child,
  &:focus-visible img:last-child {
    opacity: 1;
  }
`

export const Copyright = styled.p`
  margin-top: 16px !important;
  color: var(--layout-fg-subtle);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-align: center;
`

export const BackToTopButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 90px;
  z-index: 100;
  width: 48px;
  height: 48px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--layout-border);
  border-radius: 50%;
  color: var(--layout-fg-muted);
  background: rgba(255, 255, 255, 0.01);
  cursor: pointer;
  transition: var(--layout-transition);

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus-visible {
    color: var(--layout-accent-hover);
    border-color: var(--layout-fg-muted);
  }

  ${mobile} {
    display: none;
  }
`
