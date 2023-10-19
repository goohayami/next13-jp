import Image from "next/image";

export default function routing() {
  return (
    <>
      <div className="main-container">
        <h1>Defining Routes</h1>
        <h2>Createing Routes</h2>
        <p>
          このページでは、Next.jsアプリケーションでルートを定義して整理する方法を説明します。
        </p>
        <p>
          Next.jsはファイルシステムベースのルーターを使用し、フォルダーを使用してルートを定義します。
        </p>
        <p>
          各フォルダはURLセグメントにマッピングされたルートセグメントを表します。ネストされたルートを作成するには、フォルダー同士をネストします。
        </p>
        <p>
          特別なpage.jsファイルを使用して、ルートセグメントを一般公開します。
        </p>

        <Image
          src="/route01.jpg"
          alt="Vercel Logo"
          //  className={styles.vercelLogo}
          width={400}
          height={240}
          priority
        />
        <p>
          この例では、/dashboard/analytics
          URLパスは、対応するpage.jsファイルを持っていないため、一般にはアクセスできません。このフォルダは、コンポーネント、スタイルシート、画像、またはその他の配置されたファイルを格納するために使用できます。
        </p>
        <h2>Createing UI</h2>
        <p>
          各ルートセグメントの UI
          を作成するために、特別なファイル規約が使用されます。最も一般的なものは、ルートに固有のUIを表示するページと、複数のルートで共有されるUIを表示するレイアウトです。
          例えば、最初のページを作成するには、appディレクトリ内にpage.jsファイルを追加し、Reactコンポーネントをエクスポートします。
        </p>

        <Image
          src="/route02.jpg"
          alt="route02"
          width={650}
          height={200}
          priority
        />

        <h1>Page and Layouts</h1>
        <p>
          続行する前に、ルーティングの基礎とルーティングの定義のページを読むことをお勧めします。
          Next.js
          13のアプリルーターでは、ページ、共有レイアウト、テンプレートを簡単に作成するための新しいファイル規約が導入されました。このページでは、Next.jsアプリケーションでこれらの特別なファイルを使用する方法を説明します。
        </p>
        <h2>Pages</h2>
        <p>
          ページはルート固有のUIです。page.jsファイルからコンポーネントをエクスポートすることでページを定義できます。ネストされたフォルダを使用してルートを定義し、page.jsファイルを使用してルートにパブリックアクセスできるようにします。
          appディレクトリ内にpage.jsファイルを追加して、最初のページを作成します。
        </p>
        <Image
          src="/route03.jpg"
          alt="route03"
          width={500}
          height={200}
          priority
        />
        <hr />
        <Image
          src="/route04.jpg"
          alt="route04"
          width={700}
          height={450}
          priority
        />
      </div>
    </>
  );
}
