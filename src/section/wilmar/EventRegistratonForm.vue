<template>
  <v-row>
    <v-col cols="12" id="reg-form">
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
        v-model="form.name"
        :label="t('registration.name')"
        :error="form.errors.has('name')"
        :error-messages="
          t(form.errors.get('name') || '', {
            attribute: t('registration.name'),
          })
        "
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
        v-model="form.department"
        :label="t('registration.department')"
        :error="form.errors.has('department')"
        :error-messages="
          t(form.errors.get('department') || '', {
            attribute: t('registration.department'),
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
      <v-select
        v-model="form.training_session_id"
        :items="sessionList"
        item-title="name"
        item-value="id"
        item-disabled="disable"
        :label="t('registration.training sessions')"
        :error="form.errors.has('training_session_id')"
        :error-messages="
          t(form.errors.get('training_session_id') || '', {
            attribute: t('registration.training sessions'),
          })
        "
      >
      <template v-slot:item="{ item, index }">
        <v-list-item :key="index" :value="item.value" @click="form.training_session_id=item.value" :disabled="item.raw.total_registered >= 150">
        {{item.title}}<span v-if="item.raw.total_registered >= 150"> (FULL)</span>
        </v-list-item>
      </template>
    </v-select>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <p class="mb-4" v-html="t('registration.tnc')"></p>
      <v-btn
        color="primary"
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
import { session_url, register_url } from "~/data/wilmarData.json";
import { computed } from "@vue/runtime-core";
import axios from 'axios'

export default {
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const path = computed(() => import.meta.env.VITE_baseUrl + route.fullPath);
    return { t, path };
  },
  async mounted(){
    const { data } = await axios.get(session_url);
    this.sessionList = data.map((item)=>{
      item.disable = true;
      return item;
    });// processDDL( data,'id','name');
    console.log(this.sessionList);
  },
  components: {
    AlertError,
  },
  data: () => ({
    success: false,
    form: new Form({
      name: "",
      department: "",
      email: "",
      training_session_id: null
    }),
    sessionList:[],
    sharing: {
      title:
        "Launch of Zoom at Wilmar",
      description: `Learn Top 5 Zoom Productivity Hacks`,
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
