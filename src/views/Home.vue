<template>
  <div class="max-w-lg mx-auto text-left">
    <div class="flex justify-center items-center space-x-8">
      <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo" /> -->
      <!-- Use Tailwind CSS h-40 (=10rem=160px) instead of .logo. -->
      <!--img alt="Vue logo" src="../assets/logo.png" class="h-40" /-->
    </div>

    <p class="text-3xl mb-2">Nouns Art Festival</p>
    <div class="space-y-2">
      <p>Nouns Art Festival (NounsFes) is an online art festival
        with a purpose to promote a peaceful and sustainable world, founded by members of NounsDAO.</p>
      <p>We run the very first NounsFes in the form of 
        <b>an online art competition</b>, for the duration of six months in the following format. </p>
      <ul>
        <li><b>What:</b> A short video (a few minutes), 
          which promotes and/or celebrates love, peace and sustainable earth (<a class="underline" href="https://sdgs.un.org/goals" target="_blank">SDGs</a>). </li>
        <li><b>Who:</b> Any individuals, groups or entities can submit</li>
        <li><b>Why:</b> Inspire the audience and create a better future</li>
        <li><b>How:</b> Upload the video to Youtube and submit its URL via the submission form 
        (which will become available on June 1st below)</li>
        <li><b>When:</b>
          <ul class="ml-4">
            <li>Announcement: May 1st</li>
            <li>Submission Period: June 1st - Sept 30th</li>
            <li>Nomination: Oct 10th</li>
            <li>Final: Oct 30th</li>
          </ul>
        </li>
        <li><b>Total prize:</b> 5eth from NounsDAO (plus additional prizes from other sponsors)</li>
        <li><b>Sponsor:</b> NounsDAO and others (to be announced)</li>
        <li><b>Requirements:</b>
          <ul class="ml-4">
            <li>Please add on-second video clip of NounsFes (specified below) at the very beginning</li>
            <li>Any format is fine (animation, 3d graphics, recorded, …)</li>
            <li>You may or may not use Noun images and logos in the video.</li>
            <li>Please add the link to NounsFes website in the description (of Youtube).</li>
          </ul>
        </li>
        <li><b>Judging process:</b> 
        The judges will review the video themselves, 
        but also their view counts, likes and comments and determine the winner.</li>
        <li><b>Secondary Use:</b>
        After the contest, we will use nominated videos to promote NounsFed and NounsDAO. 
        We may create NFTs for nominated videos and share the proceeds. 
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

<style>
/* .logo {
  height: 150px;
} */
</style>
