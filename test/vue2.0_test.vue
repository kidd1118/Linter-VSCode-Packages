<template>
    <div class="timeBox flex center percentage">
        <div class="remaining Left">
            {{ remaining }}
        </div>
        <div class="num-days">
            {{ numDays }}
        </div>
        <div class="Txt-days">
            {{ $t("text.days") }}
        </div>
        <div class="num-hours Right">
            {{ numHours }}
            {{ $t("text.hours") }}
            {{ numMins }}
            {{ $t("text.mins") }}
        </div>
    </div>
</template>

<script>
export default {
    name: "CountdownTimer",
    // good
    props: {
        tournament: {
            type: Object,
            default: null,
        },
    },
    // bad
    props: ["tournament"],

    data: function () {
        return {
            uid: "countdownTimer-" + new Date().toISOString(),
            now: new Date(),
            countdownInterval: 0,
        };
    },

    computed: {
        remaining: function () {
            return this.$t("text.remaining");
        },

        numDays: function () {
            if (!this.tournament || !this.tournament.dueMoment) {
                return 0;
            }
            var due = this.tournament.dueMoment;
            return Math.max(0, Math.floor(due.diff(moment(this.now), "days")));
        },
        numHours: function () {
            if (!this.tournament || !this.tournament.dueMoment) {
                return 0;
            }
            var due = this.tournament.dueMoment;
            return Math.max(0, Math.floor((due.diff(moment(this.now), "seconds") / 60 / 60) % 24));
        },
        numMins: function () {
            if (!this.tournament || !this.tournament.dueMoment) {
                return 0;
            }
            var due = this.tournament.dueMoment;
            return Math.max(0, Math.floor((due.diff(moment(this.now), "seconds") / 60) % 60));
        },
    },

    mounted: function () {
        var that = this;
        this.countdownInterval = window.setInterval(function () {
            that.now = new Date();
            that.timeChange();
            if (that.numDays === 0 && that.numHours === 0 && that.numMins === 0) {
                that.countdownComplete();
            }
        }, 1000);
    },

    methods: {
        timeChange: function () {
            this.$emit("timeChange");
            //console.log(">> time change", this.numDays, this.numHours, this.numMins);
        },

        countdownComplete: function () {
            console.log(">>>countdown complete", this.uid);
            clearInterval(this.countdownInterval);
            this.$emit("countdownComplete");
        },
    },
};
</script>

<style scoped></style>
