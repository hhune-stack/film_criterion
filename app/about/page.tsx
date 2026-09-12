export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-8 pt-28 pb-24">
        <div className="max-w-[1040px]">

          {/* Page Header */}
          <div className="border-b border-neutral-300 pb-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              ABOUT
            </p>

            <h1 className="mt-4 font-serif text-[40px] tracking-tight">
              CONTRECHAMPについて
            </h1>
          </div>

          {/* Statement */}
          <div className="mt-16 max-w-[680px]">
            <p className="font-serif text-[22px] leading-[1.9] tracking-tight">
              CONTRECHAMPは、映画について考えるための批評の場です。
            </p>

            <div className="mt-10 space-y-7 text-[14px] leading-[2.1] text-neutral-600">
              <p>
                新しく公開された映画だけでなく、
                すでに過ぎ去った映画にも、いまなお読むべきものがある。
              </p>

              <p>
                私たちは、映画を作品として閉じるのではなく、
                そこから広がっていく思考を文章にします。
              </p>

              <p>
                映画を見ることは、映画だけを見ることではない。
              </p>

              <p>
                映画から、身体、都市、記憶、時間、社会、他者へ。
                一本の映画を起点として、別の場所へ思考を開いていく。
                CONTRECHAMPは、そのための批評を掲載します。
              </p>
            </div>
          </div>

          {/* Editorial Policy */}
          <div className="mt-20 border-t border-neutral-300 pt-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              EDITORIAL POLICY
            </p>

            <div className="mt-8 max-w-[680px]">
              <h2 className="font-serif text-[24px] tracking-tight">
                新作と旧作
              </h2>

              <div className="mt-6 space-y-6 text-[14px] leading-[2.1] text-neutral-600">
                <p>
                  CONTRECHAMPでは、新作と旧作を強く分けません。
                </p>

                <p>
                  公開されたばかりの映画も、すでに長い時間を経た映画も、
                  いま読むことができるという一点において並べられます。
                </p>

                <p>
                  公開時期から少し離れることで、
                  映画を別の時間のなかに置き直すこと。
                  その映画が現在の私たちに何を見せるのかを考えること。
                </p>
              </div>
            </div>
          </div>

          {/* Writing */}
          <div className="mt-20 border-t border-neutral-300 pt-8">
            <p className="text-[11px] tracking-[0.2em] text-neutral-400">
              WRITING
            </p>

            <div className="mt-8 max-w-[680px]">
              <h2 className="font-serif text-[24px] tracking-tight">
                批評を書くということ
              </h2>

              <div className="mt-6 space-y-6 text-[14px] leading-[2.1] text-neutral-600">
                <p>
                  映画について書くことは、
                  映画を説明することだけではありません。
                </p>

                <p>
                  ひとつの画面、ひとつの身体、ひとつの時間から、
                  まだ言葉になっていないものを考える。
                  CONTRECHAMPは、そのような文章を大切にします。
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}