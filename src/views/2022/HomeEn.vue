<template>
  <div class="mx-auto max-w-lg p-2 text-left">
    <div class="flex items-center justify-center space-x-8">
      <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo" /> -->
      <!-- Use Tailwind CSS h-40 (=10rem=160px) instead of .logo. -->
      <!--img alt="Vue logo" src="../assets/logo.png" class="h-40" /-->
    </div>

    <p class="mb-2 font-londrina text-3xl">Nouns Art Festival</p>
    <div class="mb-8 space-y-2 font-pt-root font-medium">
      <p>
        <span class="font-londrina">Nouns Art Festival (NounsFes)</span> is an
        online art festival with a purpose to promote a peaceful and sustainable
        world, founded by members of
        <a class="font-londrina underline" href="https://nouns.wtf">NounsDAO</a
        >.
      </p>
      <p>
        We run the very first NounsFes in the form of
        <b class="font-londrina">an online art competition</b>, for the duration
        of six months in the following format.
      </p>
    </div>
    <div class="space-y-2 font-pt-root font-medium">
      <ul>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">What:</b> A short video (a few minutes),
          which promotes and/or celebrates love, peace and sustainable earth (<a
            class="underline"
            href="https://sdgs.un.org/goals"
            target="_blank"
            >SDGs</a
          >).
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Who:</b> Any individuals, groups or entities
          (for-profit or non-profit) can submit
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Why:</b> Inspire the audience and create a
          better future
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">How:</b> Upload your video to Youtube or
          create a video presentation with
          <a href="https://ooo.mmhmm.app/" class="underline">mmhmm</a>, and
          submit its URL via the
          <a href="#form" class="underline">submission form below</a>
        </li>
        <li>
          <b class="font-londrina">When:</b>
          <ul class="ml-8">
            <li class="list-disc">Announcement: May 1st, 2022</li>
            <li class="list-disc">
              Submission Period: June 1st - Nov 10th (Extended), 2022
            </li>
            <li class="list-disc">Nomination: Nov 15th, 2022</li>
            <li class="list-disc">Final: Nov 26th, 2022</li>
          </ul>
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Sponsors:</b>
          <span class="font-londrina">NounsDAO</span>, Nakajima Foundation and
          others (to be announced)
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Prize:</b> {{ total_eth }}ETH
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Charity Fund:</b> $25,000 (<a href="#note1"
            >*1</a
          >)
        </li>
        <li>
          <b class="font-londrina">Requirements:</b>
          <ul class="ml-8">
            <li class="list-disc">
              Please add this one-second video clip at the very beginning
              (created by
              <a class="underline" href="https://twitter.com/Fuyu256S"
                >Fuyu256</a
              >
              ).
              <video width="320" height="240" controls>
                <source src="@/assets/nounsfes1s_0430.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
            <li class="list-disc">
              Any format is fine (animation, 3d graphics, recorded, …)
            </li>
            <li class="list-disc">
              Please add the link to
              <span class="font-londrina">NounsFes</span> website
              (https://nounsfes.org) in the video's description.
            </li>
          </ul>
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Judging Process:</b> The finalists and the
          winner will be determined based on their contents, view counts, likes
          and comments.
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Secondary Use:</b> After the contest, we will
          use nominated videos to promote Nouns Art Festival. We
          <i>may</i> choose to create NFTs for the wining videos and finalists,
          and share the proceeds with creators and charitable organizations.
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Inspiring Video Examples:</b>
          <iframe
            class="mb-1 mt-1"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/bQoJqDi8490"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="mb-1"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/WmVLcj-XKnM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="mb-1"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/v27CEFE02Hs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="mb-1"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/2hZTpZrrDbY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <b class="font-londrina">Notes:</b>
          <ul>
            <li id="note1" class="ml-8 -indent-4">
              *1: The recipent of $25,000 must be a charitable organization with
              for
              <a
                class="underline"
                href="https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations"
                >501(c)(3) status</a
              >.
            </li>
          </ul>
        </li>
        <li class="ml-4 -indent-4">
          <b class="font-londrina">Contact:</b> Please DM to
          <a class="underline" href="https://twitter.com/nounsfes">@nounsfes</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomePage",
  setup() {
    const store = useStore();
    const total_eth = store.state.total_eth;
    return {
      total_eth,
    };
  },
});
</script>
