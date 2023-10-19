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
          各フォルダはURLセグメントにマッピングされたルートセグメントを表します。ネストされたルートを作成するには、フォルダー同士をネストします。
          特別なpage.jsファイルを使用して、ルートセグメントを一般公開します。
        </p>

        <Image
          src="/route01.jpg"
          alt="Vercel Logo"
          //  className={styles.vercelLogo}
          width={500}
          height={320}
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
        <hr />

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
          width={530}
          height={240}
          priority
        />
        <hr className="dot" />
        <Image
          src="/route04.jpg"
          alt="route04"
          width={700}
          height={450}
          priority
        />
        <h3>Good to know:</h3>
        <p>
          ページは常にルートサブツリーのリーフです。 ページには .js、.jsx、.tsx
          の拡張子が使えます。
          page.jsファイルはルートセグメントを一般にアクセス可能にするために必要です。
          ページはデフォルトではサーバーコンポーネントですが、クライアントコンポーネントに設定することもできます。
          ページはデータをフェッチできます。詳細については、データ取得のセクションを参照してください。
        </p>
        <hr />
        <h1>Layouts</h1>
        <p>
          レイアウトは複数のページで共有されるUIです。ナビゲーションの際、レイアウトは状態を保持し、インタラクティブであり続け、再レンダリングしません。レイアウトは入れ子にすることもできます。
          レイアウトは、デフォルトでlayout.jsファイルからReactコンポーネントをエクスポートすることで定義できます。コンポーネントは、レンダリング中に子レイアウト（存在する場合）または子ページを入力するchildren
          propを受け入れる必要があります。
        </p>

        <Image
          src="/route05.jpg"
          width={300}
          height={350}
          alt="route05"
          priority
        />
        <p>
          この例では、/dashboard/analytics
          URLパスは、対応するpage.jsファイルを持っていないため、一般にはアクセスできません。このフォルダは、コンポーネント、スタイルシート、画像、またはその他の配置されたファイルを保存するために使用できます。
        </p>
        <h2>Createing UI</h2>
        <p>
          各ルートセグメントの UI
          を作成するために、特別なファイル規約が使用されます。最も一般的なものは、ルートに固有のUIを表示するページと、複数のルートで共有されるUIを表示するレイアウトです。
          例えば、最初のページを作成するには、appディレクトリ内にpage.jsファイルを追加し、Reactコンポーネントをエクスポートします。
        </p>

      <Image 
        src="/route06.jpg" 
        alt="route06" 
        width={650} 
        height={210} 
        priority 
      />
      </div>
    </>
  );
}
