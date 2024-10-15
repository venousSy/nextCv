import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function DefaultFooter() {
  return (
    <Footer container className=" rounded-none ">
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
