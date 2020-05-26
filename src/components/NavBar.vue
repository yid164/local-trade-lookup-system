<template>
    <nav>
        <v-app-bar color="black" dark app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Welcome to Local Trade Lookup System</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" color="black" dark app>
            <v-list>
                <v-col>
                    <v-list-item>
                        <v-list-item-avatar color="red">
                            <span class="white--text headline">UR</span>
                        </v-list-item-avatar>
                        <v-list-item-content class="px-0">
                            <v-list-item-title class="title">
                                User
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item-group>
                        <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                :to="item.route"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-col>
            </v-list>

            <div class="pa-2">
                <v-btn block>Logout</v-btn>
            </div>

        </v-navigation-drawer>

    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
                drawer: false,
                popSearch: false,
                items: [
                    {
                        icon: 'mdi-account-search',
                        text: 'Landing',
                        route: '/'
                    },
                    {
                        icon: 'mdi-view-day-outline',
                        text: 'Browsing',
                        route: '/browsing'
                    },
                    {
                        icon: 'mdi-map-marker',
                        text: 'Symbol',
                        route: '/symbol'
                    },
                    {
                        icon: 'mdi-android-messages',
                        text: 'Contact',
                        route: '/contact'
                    }
                ],
                model: 1,
            }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>

