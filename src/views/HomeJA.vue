<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <div class="flex justify-center items-center space-x-8">
      <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo" /> -->
      <!-- Use Tailwind CSS h-40 (=10rem=160px) instead of .logo. -->
      <!--img alt="Vue logo" src="../assets/logo.png" class="h-40" /-->
    </div>

    <p class="text-3xl mb-2">Nouns Art Festival</p>
    <div class="space-y-2 mb-8">
      <p>ナウンズ・アート・フェスティバル (ナウンズフェス) は、平和で維持可能な地球の大切さを
        一人でも多くの人に知ってもらうことを目的に、<a class="underline" href="https://nouns.wtf">NounsDAO</a>
        のメンバーによって作られた、オンライン・アート・フェスティバルです。</p>
      <p>最初のナウンズフェスは、 以下のフォーマットで、６ヶ月間に渡る
        <b>オンライン・コンペティション</b>の形で開催します。</p>
    </div>
    <div class="space-y-2">
      <ul>
        <li class="ml-4 -indent-4"><b>募集作品:</b> 愛、平和、もしくは維持可能な地球(<a class="underline" href="https://sdgs.un.org/goals" target="_blank">SDGs</a>)をテーマにした、２〜３分の短編映像 </li>
        <li class="ml-4 -indent-4"><b>参加条件:</b> 個人、グループ、営利企業、非営利企業が参加可能です</li>
        <li class="ml-4 -indent-4"><b>目的:</b>観た人に感動を与え、より良い未来を作る</li>
        <li class="ml-4 -indent-4"><b>応募方法:</b>Youtubeに映像をアップロードした後、URLを指定のフォーム（６月１日公開）に投稿してください</li>
        <li><b>When:</b>
          <ul class="ml-8">
            <li class="list-disc">発表: 2022年５月１日</li>
            <li class="list-disc">募集期間: 2022年６月１日〜９月３０日</li>
            <li class="list-disc">ノミネーション発表: 2022年１０月１０日</li>
            <li class="list-disc">最終選考: 2022年１０月３０日</li>
          </ul>
        </li>
        <li class="ml-4 -indent-4"><b>スポンサー:</b> NounsDAO、Nakajima Foundation他 (募集中)</li>
        <li class="ml-4 -indent-4"><b>賞金:</b> 5eth + $25,000 (他のスポンサーも募集中)</li>
        <li><b>募集要項:</b>
          <ul class="ml-8">
            <li class="list-disc">下の映像を作品の冒頭に置いて下さい(<a class="underline" href="https://twitter.com/Fuyu256S">Fuyu256さん</a>に作っていただきました) 
              <video width="320" height="240" controls>
                <source src="../assets/nounsfes1s_0430.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </li>
            <li class="list-disc">アニメ、３D、実写などフォーマットは問いません</li>
            <li class="list-disc">映像の詳細にナウンズフェスへのURL (https://nounsfes.org) を記載して下さい。</li>
          </ul>
        </li>
        <li class="ml-4 -indent-4"><b>審査方法:</b> 
        作品そのものに加え、ビュー数、いいねの数、コメントなどを参考にして決めます。</li>
        <li class="ml-4 -indent-4"><b>二次利用:</b>
        コンテスト終了後、ノミネーションされた作品は、ナウンズフェスのプロモーションに使わせていただきます。
        また、それらの作品のNFTを作り、売り上げをクリエーターや指定された非営利団体に配布することも考えています。
        </li>
        <li class="ml-4 -indent-4"><b>参考作品:</b> 
          <iframe class="mt-1 mb-1" width="320" height="180" src="https://www.youtube.com/embed/bQoJqDi8490" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="mb-1" width="320" height="180" src="https://www.youtube.com/embed/WmVLcj-XKnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="mb-1" width="320" height="180" src="https://www.youtube.com/embed/v27CEFE02Hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="mb-1" width="320" height="180" src="https://www.youtube.com/embed/2hZTpZrrDbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutPage",
  setup() {
    return {};
  },
});
</script>
