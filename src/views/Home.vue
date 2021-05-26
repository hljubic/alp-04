<template>
  <div class="home">

    <v-progress-linear
        indeterminate
        color="yellow"
        v-show="loading"
    ></v-progress-linear>

    <v-btn
        fab
        dark
        large
        color="primary"
        class="mx-2 ma-4"
        @click="izvrsiAkciju"
    >
      <v-icon dark>
        mdi-refresh
      </v-icon>
    </v-btn>

    <v-text-field
        label="Unesite neki broj.."
        @input="evoInput()"
        @change="evoChange()"
        v-model="number"
        class="mt-5"
        solo
    ></v-text-field>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    loading: false,
    number: '',
  }),
  methods: {
    izvrsiAkciju() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 5000); // 5000 milisekundi
    },
    evoInput() { // Ova metoda se poziva svaki put kad se upiše ili izbriše neki znak
      console.log(this.number) // gore smo nakačili varijablu number na onaj input koristeći direktivu v-model
    },
    evoChange() { // Ova metoda se poziva samo onda kad "izađemo" iz inputa, odnosno kad izgubi fokus.
      let broj = parseInt(this.number)
      let prost = true;

      for (let i = 2; i < broj - 1; i++) {
        if (broj % i === 0) {
          prost = false;
          break;
        }
      }

      if (prost) {
        this.$router.push('/kontakt')
      } else {
        alert('Broj nije prost!');
      }
    }
  }
}
</script>
