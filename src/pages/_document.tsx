import { extractCritical } from '@emotion/server';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

type NewDocumentInitialProps = DocumentInitialProps & {
  ids: string[];
  css: string;
};

class CustomDocument extends Document<NewDocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <>
        {initialProps.styles}
        <style data-emotion-css={critical.ids.join(' ')} dangerouslySetInnerHTML={{ __html: critical.css }} />
      </>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <style data-emotion-css={this.props?.ids?.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
