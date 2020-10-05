import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                'primary': colors.teal.accent3,
                'background': colors.blueGrey.darken3,
                'background-deep': colors.blueGrey.darken4,
            }
        },
    },
});
