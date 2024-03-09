<script setup>
import { reactive, ref } from 'vue';
import { UiInput, UiTextarea, UiSelect, UiAutocomplete, UiContact, UiCheckbox, UiDatepicker, UiNumber } from './ui'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  weight: '',
  birthDate: '',
  address: '',
  bio: '',
  lang: '',
  skills: [],
  notification: false,
})

const langs = [
  {name: 'Russian', value: 'ru'},
  {name: 'English', value: 'en'},
]

const skills = [
  {name: 'Java', value: 'java'},
  {name: 'JS', value: 'js'},
  {name: 'C#', value: 'c#'},
  {name: 'Kotlin', value: 'kotlin'},
]

const addresses = ['Kazan', 'Moscow', 'St. Petersburg', 'New York']

function onSubmit() {
  alert(JSON.stringify(form, null, 2))
}
</script>

<template>
  <form class="w-25 m-auto mt-5" @submit.prevent="onSubmit">
    <fieldset>
      <div class="d-flex gap-2">
        <UiInput label="Name" v-model="form.name" v-limit="[3, 10]" required/>
        <UiContact label="Email" v-model="form.email" type="email" required/>
      </div>
      <div class="d-flex gap-2">
        <UiDatepicker label="Birth date" v-model="form.birthDate" v-limit="['1990-01-01', '2025-01-01']" required/>
        <UiNumber label="Weight (kg)" v-model="form.weight" v-limit="[30, 150]" step=".5"/>
      </div>
      <UiContact label="Phone" v-model="form.phone" type="tel"/>
      <UiAutocomplete label="Address" v-model="form.address" v-limit="[10, 40]" :options="addresses" required/>
      <UiTextarea label="Bio" v-model="form.bio" v-limit="[10, 50]"/>
      <UiSelect label="Language" v-model="form.lang" :options="langs" placeholder="Select language" required/>
      <UiSelect label="Skills" v-model="form.skills" :options="skills" placeholder="Select skills" multiple required/>
      <UiCheckbox v-model="form.notification" label="I want to receive the notifications"/>
      <UiCheckbox required>I accept the <a href="#">terms</a></UiCheckbox>
    </fieldset>
    
    <button class="btn btn-primary me-2" type="submit">Submit</button>
    <button class="btn btn-secondary" type="reset">Reset</button>
    <!-- <pre>{{ form }}</pre> -->
  </form>
</template>
