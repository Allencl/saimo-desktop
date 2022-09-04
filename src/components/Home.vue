<template>
    <div>

        <v-row >
            <v-col
                cols="12"
                sm="6"
            >
            <v-card
            class="mt-4 mx-auto"
            max-width="400"
        >
        <v-sheet
        class="v-sheet--offset mx-auto"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
        >
        <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
        ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
        <div class="text-h6 font-weight-light mb-2">
            用户注册
        </div>
        <div class="subheading font-weight-light grey--text">
            上赛季表现
        </div>
        <v-divider class="my-2"></v-divider>
        <v-icon
            class="mr-2"
            small
        >
            mdi-clock
        </v-icon>
        <span class="text-caption grey--text font-weight-light">最后一次登记是26分钟前</span>
        </v-card-text>
        </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
            <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
        >
        <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
        ></v-sparkline>
        </v-card>
            </v-col>
        </v-row>

        <v-row >
            <v-col
                cols="12"
                sm="6"
            >
            <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
        >
            <v-card-title>
            <v-icon
                :color="checking ? 'red lighten-2' : 'indigo'"
                class="mr-12"
                size="64"
                @click="takePulse"
            >
                mdi-heart-pulse
            </v-icon>
            <v-row align="start">
                <div class="text-caption grey--text text-uppercase">
                Heart rate
                </div>
                <div>
                <span
                    class="text-h3 font-weight-black"
                    v-text="avg || '—'"
                ></span>
                <strong v-if="avg">BPM</strong>
                </div>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn
                icon
                class="align-self-start"
                size="28"
            >
                <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
            </v-card-title>

            <v-sheet color="transparent">
            <v-sparkline
                :key="String(avg)"
                :smooth="16"
                :gradient="['#f72047', '#ffd200', '#1feaea']"
                :line-width="3"
                :value="heartbeats"
                auto-draw
                stroke-linecap="round"
            ></v-sparkline>
            </v-sheet>
        </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
            <v-card
            class="mx-auto elevation-20"
            color="purple"
            dark
            style="max-width: 400px;"
        >
            <v-row justify="space-between">
            <v-col cols="8">
                <v-card-title>
                <div>
                    <div class="text-h5">
                    Halycon Days
                    </div>
                    <div>Ellie Goulding</div>
                    <div>(2013)</div>
                </div>
                </v-card-title>
            </v-col>
            <v-img
                class="shrink ma-2"
                contain
                height="125px"
                :src="logoImage"
                style="flex-basis: 125px"
            ></v-img>
            </v-row>
            <v-divider dark></v-divider>
            <v-card-actions class="pa-4">
            Rate this album
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 text-caption mr-2">
                ({{ rating }})
            </span>
            <v-rating
                v-model="rating"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
            ></v-rating>
            </v-card-actions>
        </v-card>

            </v-col>
        </v-row>

        <v-row >
            <v-col
                cols="12"
                sm="6"
            >
            <v-card
        class="mx-auto text-center"
        color="green"
        dark
        max-width="600"
    >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Go to Report
      </v-btn>
    </v-card-actions>
        </v-card>
            </v-col>
        </v-row>






    </div>
  </template>
    
<script>
  const exhale = ms => new Promise(resolve => setTimeout(resolve, ms))

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]


    export default {
        data: () => ({  
            logoImage: require("@/assets/logo.svg"),

            value: [
                423,
                446,
                675,
                510,
                590,
                610,
                760,
            ],

            width: 2,
            radius: 10,
            padding: 8,
            lineCap: 'round',
            gradient: gradients[5],
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            gradientDirection: 'top',
            gradients,
            fill: false,
            type: 'trend',
            autoLineWidth: false,


            rating: 4.3,
            checking: false,
            heartbeats: [],

            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
            ],
            value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
            ],
        }),
        computed: {
            avg () {
                const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
                const length = this.heartbeats.length

                if (!sum && !length) return 0

                return Math.ceil(sum / length)
            },
        },
        created () {
            this.takePulse(false)
        },
        methods:{
            heartbeat () {
                return Math.ceil(Math.random() * (120 - 80) + 80)
            },
            async takePulse (inhale = true) {
                this.checking = true

                inhale && await exhale(1000)

                this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

                this.checking = false
            },


        }
    }
</script>
    
  
<style scoped lang="scss">
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
    