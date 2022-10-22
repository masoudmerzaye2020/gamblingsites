import React from "react";
import Header from "../../components/header";
import Section from "../../components/section";
import Container from "../../components/container";
import Title from "../../components/title";
import TextTitle from "../../components/TextTitle";

function index() {
  return (
    <>
      <Header>Terms of Use</Header>
      <Section>
        <Container>
          <p>
            The following sets out the terms of use for the website
            GamblingSites.com.
          </p>
          <p>The following definitions of terms apply:</p>
          <h3>-www.gamblingsites.com – the “Site”</h3>
          <h3>-The owners of www.gamblingsites.com – the “Owners”</h3>

          <Title title={"Terms of Use"} />
          <p>
            We advise you to read these terms carefully before using the Site,
            and you may take a copy of them for your own reference.
          </p>

          <TextTitle title={"1. Agreement and Acceptance of Terms"} />
          <p>
            Use of the Site by any User is subject to the agreement and
            acceptance of the Terms. Your use of the Site constitutes an
            agreement and acceptance of the Terms without any modifications,
            additions, or removal.
          </p>
          <TextTitle title={"2. Updating and Amending of Terms"} />
          <p>
            The Owners, or agent acting on behalf of the Owners, may update or
            amend the Terms at any time without notice.{" "}
          </p>
          <TextTitle title={"3. Description of Service"} />
          <p>
            The Site provides information, reviews, news, and comparisons
            relating to gambling and gambling sites.
          </p>
          <p>
            The Site isn’t a gambling operator or a provider of gambling
            services. The Site doesn’t accept or facilitate gambling
            transactions.
          </p>
          <TextTitle title={"4. Privacy"} />
          <p>
            The Site’s privacy policy defines how the Site and the Owners handle
            information about the User.
          </p>
          <TextTitle title={"5. Third-Party Websites"} />
          <p>
            The Site contains link to external third-party websites, which
            include websites providing gambling services. The Site has no
            control over third-party websites, and it’s not responsible or
            liable for any content, products, or other materials available from
            these third-party websites.
          </p>
          <p>
            By visiting any third-party website you agree that you’ll be subject
            to all rules and terms of use of that website, and you cannot hold
            the Site or the Owners responsible for any damage or loss caused by
            a third-party website or in connection with the use of a third-party
            website.
          </p>
          <TextTitle title={"6. User Obligations"} />
          <p>
            It’s your responsibility as the User to check the rules and terms of
            use related to any third-party websites.
          </p>
          <p>
            It’s your responsibility as the User to check the applicable laws in
            your area before using the services of any third-party website
            linked on the Site.
          </p>
          <p>
            You agree as the User not to reproduce, duplicate, sell, trade, or
            copy in any way any content on the Site.
          </p>
          <p>
            Where the Site allows the submission of content from the User, you
            as the User agree to the following:
          </p>
          <TextTitle title={"7. Disclaimer"} />
          <p>
            The Site and The Owners make all reasonable effort to ensure that
            the information, content, and links provided on the Site is
            accurate.
          </p>
          <p>
            As the User you agree that the Site and/or the Owners cannot and
            will not be held responsible or liable for any inaccuracies,
            contained within the information, content, and links provided on the
            Site, nor for any damage or loss of any kind caused by such
            inaccuracies.
          </p>
          <p>
            As the User, you understand and agree that all information, content,
            and links provided on the Site is made available to you at your own
            risk.
          </p>
          <TextTitle title={"8. Reservation of Rights"} />
          <p>
            The Site and the Owners reserve all of their rights relating to all
            information and content provided on the site including, but not
            limited to all copyrights, trademarks, patents, and other
            proprietary rights.
          </p>
          <p>
            The use of any of the Site’s or the Owners’ rights requires written
            permission from the Site or the Owners.
          </p>
          <TextTitle
            title={
              "9. Notification of Inaccuracies and/or Copyright Infringement"
            }
          />
          <p>
            If you as the User believe that any of the information or content
            provided on the Site may be inaccurate or constitute a copyright
            infringement, you may notify the Site in accordance with clause 11
            of these Terms.
          </p>
          <TextTitle title={"10. Questions Relating to these Terms"} />
          <p>
            If you as the User have any questions relating to these Terms you
            may contact the Site in accordance with clause 11 of these Terms.
          </p>
          <TextTitle title={"11. Contacting The Site"} />
          <p>
            Details of how to contact the Site may be found on the following
            page:
          </p>
          <TextTitle title={"12. Language of Terms"} />
          <p>
            Should there be any discrepancy between the English language version
            of these Terms and a version in any other language, then the English
            language version shall be deemed to apply.
          </p>
          <TextTitle title={"13. Enforceable Clauses"} />
          <p>
            Should any of the clauses contained in these Terms not be
            enforceable in the jurisdiction of the User, then such clauses may
            not apply.
          </p>
          <p>
            In such an instance where a clause or clauses aren’t enforceable all
            other clauses in these Terms still apply.
          </p>
        </Container>
      </Section>
    </>
  );
}

export default index;
