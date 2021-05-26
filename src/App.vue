<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="link in links"
            :key="link.route"
            :to="link.route"
        >
          {{ link.text }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="primary darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="12"
          >
            <v-sheet
                min-height="70vh"
                rounded="lg"
                class="pa-5"
            >
              <transition
                  name="fade"
                  mode="out-in"
              >
                <router-view></router-view>
              </transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        'text': 'Naslovnica',
        'route': '/'
      },
      {
        'text': 'Stranica 1',
        'route': '/stranica_1'
      },
      {
        'text': 'Stranica 2',
        'route': '/stranica_2'
      },
      {
        'text': 'Kontakt',
        'route': '/kontakt'
      },
    ],
  }),
}
</script>