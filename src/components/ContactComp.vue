<template>
    <div>
        <v-form>
            <span>
                <h3>
                    Leave Us A Message
                </h3>
            </span>
            <v-container>
                <v-col>
                    <v-text-field label="Your Email Address"></v-text-field>
                    <v-text-field label="Subject"></v-text-field>
                    <v-textarea label="Content"></v-textarea>
                    <v-btn>Send</v-btn>
                </v-col>
            </v-container>
        </v-form>
<!--        <v-dialog v-model="pop">-->
<!--            <v-card v-if="success">-->
<!--                <v-card-title>-->
<!--                    <span class="headline">Your Email is Sent</span>-->
<!--                </v-card-title>-->
<!--            </v-card>-->

<!--            <v-card v-if="!success">-->
<!--                <v-card-title>-->
<!--                    <span class="headline">Your Email is Not Sent</span>-->
<!--                </v-card-title>-->
<!--            </v-card>-->
<!--        </v-dialog>-->

    </div>
</template>

<script>
    export default {
        name: "ContactComp"
    }
</script>

<style scoped>

</style>
