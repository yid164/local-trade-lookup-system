<template>
    <div>
        <v-col justify="center">
            <h2 class="text-md-center">Search your Stock</h2>
            <v-divider></v-divider>
            <v-autocomplete
                    class="mx-10"
                    hide-no-data
                    hide-details
                    solo-inverted
                    label="Search Your Stock"
            ></v-autocomplete>
        </v-col>
    </div>
</template>

<script>
    export default {
        name: "LandingComp"
    }
</script>

<style scoped>

</style>
