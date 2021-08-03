<template>
  <div class="part_container" id="storage">
    <div name="title"> 
      <div name="index">05</div>
      <h1>Производство</h1>
    </div>
    <div class="row">
      <table class="processing">
        <tr>
          <td>
            <div class="title_control">Тип биоробота:</div>
          </td>
        </tr>
        <tr  class="custom_radio">
          <td>
            <label>
              <input type="radio" value="0" name="biorobot_type" checked>
              <div class="dotte_border">
                <div class="dotte"></div>
              </div>
              <span> FrovntEnd</span>
            </label>
          </td>
          <td>
            <label>
                <input type="radio" value="1" name="biorobot_type">
                <div class="dotte_border">
                  <div class="dotte"></div>
                </div>
                <span> Desing</span>
              </label>
          </td>
        </tr>
        <tr>
          <td>
            <div class="title_control">Стабилизатор:</div>
          </td>
        </tr>
        <tr class="custom_radio">
          <td>
            <label>
              <input type="radio" value="0" name="stabilizer" checked>
              <div class="dotte_border">
                <div class="dotte"></div>
              </div>
              <span> Male</span>
            </label>
          </td>
          <td>
            <label>
              <input type="radio" value="1" name="stabilizer">
              <div class="dotte_border">
                <div class="dotte"></div>
              </div>
              <span> Famale</span>
            </label>
          </td>
        </tr>

            <button name="create_biorobot">Произвести за 10 монет</button>

      </table>
      <div class="control_wrap">
        <table name="details">
          <tr name="biomechanism">
            <td>
              <div class="control" name="biomechanism" status="a" v-on:click="update()">
                <div name="icon"></div>
              </div>
            </td>
            <td>
              <div class="control" name="biomechanism" status="a" v-on:click="update()">
                <div name="icon"></div>
              </div>
            </td>
            <td>
              <div class="control" name="biomechanism" status="b" v-on:click="update()">
                <div name="icon"></div>
              </div>
            </td>
            <td>
              <div class="control" name="biomechanism" status="c" v-on:click="update()">
                <div name="icon"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control" name="cpu" status="a">
                <div name="icon"></div>
              </div>
            </td>
            <td>
              <div class="control" name="cpu" status="b">
                <div name="icon"></div>
              </div>
            </td>
            <td>
              <div class="control" name="cpu" status="c">
                <div name="icon"></div>
              </div>
            </td>
            <td>
              <div class="control" name="cpu" status="c">
                <div name="icon"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control" name="soul" status="b">
                <div name="icon"></div>
              </div>
            </td>
          </tr>          
        </table>
        <p name="info">Для производства биоробота не хватает 2 биомеханизма, 3 процессора и души</p>
      </div> 
      <div class="display_robot">
        <div name="robot_img">
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {
        biomechanism: [
          {
            id: 0,
            status: "b"
          },
          {
            id: 1,
            status: "b"
          },
          {
            id: 2,
            status: "b"
          }
        ],

        cpu: [
          {
            id: 0,
            status: "b"
          },
          {
            id: 0,
            status: "b"
          },
          {
            id: 0,
            status: "b"
          }
        ],

        soul: [
          {
            id: 0,
            status: "b"
          }
        ]

      }
    }
  },

  methods: {
    update: function () {
      
    }
  },

  mounted() {
  }
}
</script>

<style scoped>
  #storage .part_container {
    padding: 0;
    margin-top: 100px; 
  }

  #storage .row {
    display: flex;
    flex-direction: row;
    margin: 65px 0 0 130px;
  }

  #storage .row .control_wrap {
    max-width: 250px;
  }

  #storage table.processing {
    display: block;
    width: 260px;
  }

  #storage table.processing .title_control {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    padding: 0 0 16px 0;
  }

  #storage .custom_radio label {
    display: flex;
    width: 120px;
    height: 28px;
    margin: 0 5px 28px 0;
  }

  #storage .custom_radio label span {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    color: #fff;
    margin: 0 0 0 12px;
  }

  #storage .custom_radio label input {
    display: none;
  }

  #storage .custom_radio label .dotte_border {
    position: relative;
    display: inline-flex;
    width: 22px;
    height: 22px;
    border: 2px solid gainsboro;
    border-radius: 25px;
  }

  #storage .custom_radio label .dotte_border .dotte {
    margin: auto;
    width: 16px;
    height: 16px;
    border-radius: 25px;
  }

  #storage .custom_radio label input:checked ~ .dotte_border .dotte {
    background-color: #FF7F22;
  }

  #storage .control {
    position: relative;
    display: flex;
    width: 44px;
    height: 44px;
    background: transparent;
    margin: 0 6px 16px 0;
    border: 2px solid #FF7F22;
    border-radius: 5px;
  }

  #storage .control [name=icon] {
    position: relative;
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    width: 80%;
    height: 80%;
    margin: auto;
  }

  #storage .control[name=cpu] [name=icon] {
    width: 50%;
    height: 50%;
  }

  #storage .control[name=soul] [name=icon] {
    border: 1px solid #FF7F22;
    background-size: 65% 80%;
    border-radius: 25px;
    overflow: hidden;
  }

  #storage .control [name=face] [name=icon] {
    width: 70%;
    height: 70%;
  }

  #storage .control[status=a] [name=icon] {
    border-color: #FF7F22;
  }

  #storage .control[status=b] {
    background-color: #333940;
    border: 2px solid transparent;
  }

  #storage .control[status=c] {
    background-color: #333940;
    border: 2px solid transparent;
  }

  #storage .control[name=soul][status=b] [name=icon] {
    border: 1px solid #fff;
  }

  #storage .control[name=biomechanism][status=a] [name=icon] {
    background-image: url("..\\..\\public\\img\\bio_a.svg");
  }

  #storage .control[name=biomechanism][status=b] [name=icon] {
    background-image: url("..\\..\\public\\img\\bio_b.svg");
  }

  #storage .control[name=biomechanism][status=c] [name=icon] {
    background-image: url("..\\..\\public\\img\\bio_c.svg");
  }

    #storage .control[name=cpu][status=a] [name=icon] {
    background-image: url("..\\..\\public\\img\\cpu_a.svg");
  }

  #storage .control[name=cpu][status=b] [name=icon] {
    background-image: url("..\\..\\public\\img\\cpu_b.svg");
  }

  #storage .control[name=cpu][status=c] [name=icon] {
    background-image: url("..\\..\\public\\img\\cpu_c.svg");
  }

  #storage .control[name=soul][status=a] [name=icon] {
    background-image: url("..\\..\\public\\img\\soul_a.svg");
  }

   #storage .control[name=soul][status=b] [name=icon] {
    background-image: url("..\\..\\public\\img\\soul_b.svg");
  }

  #storage .display_robot {
    position: relative;
    width: 236px;
    height: 320px;
    padding: 0 30px 211px 0;
  }

  #storage .display_robot [name=robot_img] {
    width: 100%;
    height: 100%;
    background-image: url("..\\..\\public\\img\\biorobots\\male_frontend_frontend.svg");
  }

  .btn_text {
    display: flex;
  }

  #storage [name=create_biorobot] {
    margin-top: 42px;
    background-color: transparent;
    height: 48px;
    width: 234px;
    border: 2px solid #FF7F22;
    box-sizing: border-box;
    border-radius: 60px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  #storage [name=create_biorobot]:hover {
    background: #FF5722;
    border: none;
  }

  #storage [name=create_biorobot]:active {
    background: #FF7F22;
    border: 2px solid #FF7F22;
    box-sizing: border-box;
  }

  #storage [name=create_biorobot]:disabled {
      background: transparent;
      border: 2px solid #4C5865;
      color:#4C5865;
    }

  #storage p{
    margin-top: 40px !important;
    width: 100%;
    margin: 0;
    color:#A3B8CC;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

  }

</style>