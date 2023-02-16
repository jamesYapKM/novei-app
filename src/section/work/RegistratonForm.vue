<template>
  <v-row>
    <v-col cols="12">
      <span class="float-right">
        <ShareNetwork
          v-for="network in networks"
          :network="network.network"
          :key="network.network"
          :style="{ backgroundColor: network.color }"
          :url="path"
          :title="sharing.title"
          :description="sharing.description"
          :quote="sharing.quote"
          :hashtags="sharing.hashtags"
          class="social-share"
        >
          <i :class="network.icon"></i>
        </ShareNetwork>
      </span>
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
      <v-select
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
      ></v-select>
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
      <v-select
        v-model="form.industry"
        :items="industryClassifies"
        :label="t('registration.industry classification')"
        :error="form.errors.has('industry')"
        :error-messages="
          t(form.errors.get('industry') || '', {
            attribute: t('registration.industry classification'),
          })
        "
      ></v-select>
    </v-col>
    <v-col cols="12" md="6">
      <v-select
        v-model="form.noe"
        :items="noes"
        :label="t('registration.number of employees')"
        :error="form.errors.has('noe')"
        :error-messages="
          t(form.errors.get('noe') || '', {
            attribute: t('registration.number of employees'),
          })
        "
      ></v-select>
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
    <v-col cols="12">
      <v-alert
        v-if="form.errors.any()"
        density="comfortable"
        type="error"
        variant="tonal"
      >
        There were some problems with your input.
      </v-alert>
      <v-alert
        v-if="success"
        density="comfortable"
        type="success"
        variant="tonal"
      >
        Register successfully.
      </v-alert>
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
import { useRoute } from "vue-router";
import { register_url } from "~/data/workData.json";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const path = computed(() => import.meta.env.VITE_baseUrl + route.fullPath);
    return { t, CountryList, path };
  },
  components: {
    AlertError,
  },
  data: () => ({
    success: false,
    form: new Form({
      firstname: "",
      lastname: "",
      email: "",
      confirmEmail: "",
      country: "Singapore",
      phone: "",
      organization: "",
      job: "",
      industry: null,
      noe: null,
      event_id:1,
      ace: 0,
      event: "work"
    }),
    industryClassifies: [
      "Advertising",
      "Biotech/Pharma",
      "Communications",
      "Construction",
      "Education - Higher-Ed",
      "Education - K-12",
      "Education - Other",
      "Entertainment",
      "Finance & Insurance",
      "Government",
      "Healthcare",
      "Hospitality",
      "Legal",
      "Manufacturing",
      "Non-profit",
      "Other",
      "Professional Services & Consulting",
      "Real Estate",
      "Retail/Wholesale",
      "Technology",
      "Transportation",
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
    yesNoItem:[
      "Yes",
      "No"
    ],
    sharing: {
      title:
        "Work Transformation Summit Singapore",
      description: `Using technology to drive growth in every economic climate.
      16 March 2023 | 12:00pm - 4:30pm SGT`,
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
        .post(register_url)
        .then((response) => {
          console.log(response);
          this.success = true;
          this.form.clear();
          this.form.reset();
        })
        .catch(({ response }) => {
          console.log(response);
          this.success = false;
          if (response.status == 422) {
            this.form.errors.set(response.data.errors);
          }
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
