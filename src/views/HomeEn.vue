<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <div class="flex justify-center items-center space-x-8">
      <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo" /> -->
      <!-- Use Tailwind CSS h-40 (=10rem=160px) instead of .logo. -->
      <!--img alt="Vue logo" src="../assets/logo.png" class="h-40" /-->
    </div>

    <p class="text-3xl mb-2">Nouns Art Festival</p>
    <div class="space-y-2 mb-8">
      <p>Nouns Art Festival (NounsFes) is an online art festival
        with a purpose to promote a peaceful and sustainable world, 
        founded by members of <a class="underline" href="https://nouns.wtf">NounsDAO</a>.</p>
      <p>We run the very first NounsFes in the form of 
        <b>an online art competition</b>, for the duration of six months in the following format. </p>
    </div>
    <div class="space-y-2">
      <ul>
        <li class="ml-4 -indent-4"><b>What:</b> A short video (a few minutes), 
          which promotes and/or celebrates love, peace and sustainable earth (<a class="underline" href="https://sdgs.un.org/goals" target="_blank">SDGs</a>). </li>
        <li class="ml-4 -indent-4"><b>Who:</b> Any individuals, groups or entities (for-profit or non-profit) can submit</li>
        <li class="ml-4 -indent-4"><b>Why:</b> Inspire the audience and create a better future</li>
        <li class="ml-4 -indent-4"><b>How:</b> Upload the video to Youtube and submit its URL via the submission form 
        (which will become available on June 1st below)</li>
        <li><b>When:</b>
          <ul class="ml-8">
            <li class="list-disc">Announcement: May 1st, 2022</li>
            <li class="list-disc">Submission Period: June 1st - Sept 30th, 2022</li>
            <li class="list-disc">Nomination: Oct 10th, 2022</li>
            <li class="list-disc">Final: Oct 30th, 2022</li>
          </ul>
        </li>
        <li class="ml-4 -indent-4"><b>Sponsors:</b> NounsDAO, Nakajima Foundation and others (to be announced)</li>
        <li class="ml-4 -indent-4"><b>Prizes:</b> To be announced (mix of cash prizes and charitable contributions)</li>
        <li><b>Requirements:</b>
          <ul class="ml-8">
            <li class="list-disc">Please add this one-second video clip at the very beginning. 
              <video width="320" height="240" controls>
                <source src="../assets/proto1s_0423.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </li>
            <li class="list-disc">Any format is fine (animation, 3d graphics, recorded, …)</li>
            <li class="list-disc">Please add the link to NounsFes website (https://nounsfes.org) in the video's description.</li>
          </ul>
        </li>
        <li class="ml-4 -indent-4"><b>Judging Process:</b> 
        The finalists and the winner will be determined based on their contents, view counts, likes and comments.</li>
        <li class="ml-4 -indent-4"><b>Secondary Use:</b>
        After the contest, we will use nominated videos to promote Nouns Art Festival. 
        We <i>may</i> choose to create NFTs for the wining videos and finalists, and share the proceeds with creators and charitable organizations. 
        </li>
        <li class="ml-4 -indent-4"><b>Inspiring Video Examples:</b> 
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
  name: "HomePage",
});
</script>
