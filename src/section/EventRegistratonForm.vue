<template>
  <v-row>
    <v-col cols="12">
      <span class="float-right">
        <ShareNetwork
          v-for="network in networks"
          :network="network.network"
          :key="network.network"
          :style="{ backgroundColor: network.color }"
          :url="sharing.url"
          :title="sharing.title"
          :description="sharing.description"
          :quote="sharing.quote"
          :hashtags="sharing.hashtags"
          class="social-share"
        >
          <i :class="network.icon"></i>
        </ShareNetwork>
      </span>
      <AlertErrors
        :form="form"
        message="There were some problems with your input."
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.firstname"
        :label="t('registration.first name')"
        :error="form.errors.has('firstname')"
        :error-messages="
          t(form.errors.get('firstname') || '', {
            attribute: t('registration.first name'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.lastname"
        :label="t('registration.last name')"
        :error="form.errors.has('lastname')"
        :error-messages="
          t(form.errors.get('lastname') || '', {
            attribute: t('registration.last name'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.email"
        :label="t('registration.email')"
        :error="form.errors.has('email')"
        :error-messages="
          t(form.errors.get('email') || '', {
            attribute: t('registration.email'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.confirmEmail"
        :label="t('registration.confirm email')"
        :error="form.errors.has('confirmEmail')"
        :error-messages="
          t(form.errors.get('confirmEmail') || '', {
            attribute: t('registration.confirm email'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-autocomplete
        v-model="form.country"
        :items="CountryList"
        :label="t('registration.country')"
        item-title="name"
        item-value="name"
        :error="form.errors.has('country')"
        :error-messages="
          t(form.errors.get('country') || '', {
            attribute: t('registration.country'),
          })
        "
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.phone"
        :label="t('registration.phone')"
        :error="form.errors.has('phone')"
        :error-messages="
          t(form.errors.get('phone') || '', {
            attribute: t('registration.phone'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.organization"
        :label="t('registration.organization')"
        :error="form.errors.has('organization')"
        :error-messages="
          t(form.errors.get('organization') || '', {
            attribute: t('registration.organization'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.job"
        :label="t('registration.job title')"
        :error="form.errors.has('job')"
        :error-messages="
          t(form.errors.get('job') || '', {
            attribute: t('registration.job title'),
          })
        "
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6">
      <v-autocomplete
        v-model="form.industry"
        :items="industryClassifies"
        :label="t('registration.industry classification')"
        :error="form.errors.has('industry')"
        :error-messages="
          t(form.errors.get('industry') || '', {
            attribute: t('registration.industry classification'),
          })
        "
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" md="6">
      <v-autocomplete
        v-model="form.noe"
        :items="noes"
        :label="t('registration.number of employees')"
        :error="form.errors.has('noe')"
        :error-messages="
          t(form.errors.get('noe') || '', {
            attribute: t('registration.number of employees'),
          })
        "
      ></v-autocomplete>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <p class="mb-4" v-html="t('registration.tnc')"></p>
      <v-btn
        color="blue darken-1"
        :loading="form.busy"
        @click.stop="onSubmit"
        >{{ t("registration.register") }}</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
import { ref, toRefs } from "@vue/reactivity";
import { processDDL } from "~/utils";

import CountryList from "~/data/country.json";
import { useI18n } from "vue-i18n";
import Form from "vform";
import { AlertError } from "vform/src/components/tailwind";
import { useRouter } from 'vue-router'

const router = useRouter()

let currentPathObject = router?.currentRoute?.value; 

export default {
  setup() {
    const { t } = useI18n();
    return { t, CountryList };
  },
  components: {
    AlertError,
  },
  data: () => ({
    form: new Form({
      firstname: "",
      lastname: "",
      email: "",
      confirmEmail: "",
      country: null,
      phone: "",
      organization: "",
      job: "",
      industry: null,
      noe: null,
    }),
    industryClassifies: [
      "Non-profit",
      "Professional Services & Consulting",
      "Real Estate",
      "Retail/Wholesale",
      "Technology",
      "Transportation",
      "Other",
    ],
    noes: [
      "Just me",
      "2-10",
      "11-50",
      "51-250",
      "251-500",
      "501-1,000",
      "1,001-5,0000",
      "5,001-10,000",
      "More than 10,000",
    ],
    sharing: {
      url: currentPathObject,
      title:
        "Elevating your digital offerings to adapt to changing customer expectations",
      description: `Join us for the “Elevating your digital offerings to adapt to changing customer expectations” event and learn how you can take advantage of video technology to improve customer retention, increase operating efficiency, and more.03 November 2022 | 4:00pm - 6:00pm SGT
(includes networking drinks)

79 Ayer Rajah Crescent
#01-13 JTC LaunchPad @ one-north

Singapore 139955`,
      quote: "",
      hashtags: "zoom",
    },
    networks: [
      {
        network: "facebook",
        name: "Facebook",
        icon: "fab fah fa-lg fa-facebook-f share-icon",
        color: "#1877f2",
      },
      {
        network: "twitter",
        name: "Twitter",
        icon: "fab fah fa-lg fa-twitter share-icon",
        color: "#1da1f2",
      },
      {
        network: "linkedin",
        name: "LinkedIn",
        icon: "fab fah fa-lg fa-linkedin share-icon",
        color: "#007bb5",
      },
      {
        network: "email",
        name: "Email",
        icon: "far fah fa-lg fa-envelope share-icon",
        color: "#333333",
      },
    ],
  }),

  methods: {
    async onSubmit() {
      await this.form
        .post("/api/login")
        .then((response) => {
          console.log(response);
        })
        .catch(({ response }) => {
          console.log(response);
        });
      // ...
    },
  },
};
</script>
<!-- <script setup>
import { ref, toRefs } from "@vue/reactivity";
import { processDDL } from "~/utils";

import CountryList from "~/data/country.json";
import { useI18n } from "vue-i18n";
import Form from "vform";

const { t } = useI18n();
let form = new Form({
  firstname: "",
  lastname: "",
  email: "",
  confirmEmail: "",
  country: null,
  phone: "",
  organization: "",
  job: "",
  industry: null,
  noe: null,
});
const industryClassifies = [
  "Non-profit",
  "Professional Services & Consulting",
  "Real Estate",
  "Retail/Wholesale",
  "Technology",
  "Transportation",
  "Other",
];

const noes = [
  "Jsut me",
  "2-10",
  "11-50",
  "51-250",
  "251-500",
  "501-1,000",
  "1,001-5,0000",
  "5,001-10,000",
  "More than 10,000",
];

const onSubmit = async () => {
  const response = await form.post("/api/login");
  

};
</script> -->

<style></style>
