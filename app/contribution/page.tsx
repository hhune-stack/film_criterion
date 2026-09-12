export default function ContributionPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24">
        <div className="max-w-[1040px]">

          {/* Page Header */}
          <div className="border-b border-neutral-300 pb-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              CONTRIBUTION
            </p>

            <h1 className="mt-4 font-serif text-[40px] tracking-tight">
              寄稿について
            </h1>

            <p className="mt-4 max-w-[560px] text-[14px] leading-[1.9] text-neutral-500">
              映画について考える文章を募集しています。
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-16 max-w-[680px]">
            <p className="font-serif text-[22px] leading-[1.9] tracking-tight">
              映画から世界へ向けて、思考を開く文章を。
            </p>

            <div className="mt-10 space-y-7 text-[14px] leading-[2.1] text-neutral-600">
              <p>
                CONTRECHAMPでは、映画について考える文章を募集しています。
              </p>

              <p>
                映画をめぐる批評、エッセイ、対話など、
                一本の映画を起点として、そこから別の場所へ思考を広げていく文章をお待ちしています。
              </p>

              <p>
                新作・旧作は問いません。
                ただ映画を紹介するだけではなく、
                映画について考えることそのものが文章のなかにあることを重視します。
              </p>
            </div>
          </div>

          {/* What We Look For */}
          <div className="mt-20 border-t border-neutral-300 pt-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              WHAT WE LOOK FOR
            </p>

            <div className="mt-8 max-w-[680px]">
              <h2 className="font-serif text-[24px] tracking-tight">
                募集する文章
              </h2>

              <div className="mt-6 space-y-6 text-[14px] leading-[2.1] text-neutral-600">
                <p>
                  映画についての批評、エッセイ、対話など。
                </p>

                <p>
                  映画を出発点として、身体、都市、記憶、時間、社会、
                  他者などへ思考が広がっていく文章を歓迎します。
                </p>

                <p>
                  形式や題材をあらかじめ限定することはしません。
                  その文章によって、映画の見え方が少し変わること。
                  そのことを大切にしています。
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Process */}
          <div className="mt-20 border-t border-neutral-300 pt-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              EDITORIAL PROCESS
            </p>

            <div className="mt-8 max-w-[680px]">
              <h2 className="font-serif text-[24px] tracking-tight">
                掲載について
              </h2>

              <div className="mt-6 space-y-6 text-[14px] leading-[2.1] text-neutral-600">
                <p>
                  お送りいただいた文章は、編集部で確認します。
                </p>

                <p>
                  すべての文章を掲載するのではなく、
                  CONTRECHAMPの考える批評の場にふさわしい文章を選び、
                  掲載します。
                </p>

                <p>
                  掲載にあたって、内容や構成について
                  ご相談させていただく場合があります。
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-20 border-t border-neutral-300 pt-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              CONTACT
            </p>

            <div className="mt-8 max-w-[680px]">
              <h2 className="font-serif text-[24px] tracking-tight">
                ご寄稿を希望される方へ
              </h2>

              <p className="mt-6 text-[14px] leading-[2.1] text-neutral-600">
                現在、寄稿に関する詳細な応募方法を準備しています。
                募集方法が決まり次第、こちらでご案内します。
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}