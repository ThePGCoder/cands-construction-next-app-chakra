import * as React from "react";
import { Container, Font, Head, Html, Img } from "@react-email/components";

interface CustomEmailProps {
  name: string;
  subject: string;
  enquiry: string;
}

interface CustomEmailProps {}

const container = {margin: "0 auto"}
const CustomEmail: React.FC<CustomEmailProps> = ({
  name,
  subject,
  enquiry,
}) => {
  return (
    
      <Html>
        <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://ahbzuuiojqxavaysrhso.supabase.co/storage/v1/object/public/fonts//poppins-regular-webfont.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        </Head>
        <Container style={container}>
          
            <p>Thank you for your enquiry, we will be in touch with your very soon.</p>
            <p style={{color: "#5b5b5b"}}>
              Name: {name}
            </p>
            <p style={{color: "#5b5b5b"}}>
              Subject: {subject}
            </p>
            <p style={{color: "#5b5b5b"}}>
              Enquiry: {enquiry}
            </p>
          
          <Img src="https://ahbzuuiojqxavaysrhso.supabase.co/storage/v1/object/public/images//pgclogo.png" width={150} />
        </Container>
      </Html>
    
  );
};

export default CustomEmail;
