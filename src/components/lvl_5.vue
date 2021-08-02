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
          </tr>
          <tr>
            <td>
              <div class="control" name="soul" status="a">
                <div name="icon"></div>
              </div>
            </td>
          </tr>
        </table>
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
    margin-left: 130px;
  }

  #storage table.processing {
    display: block;
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
    padding: 20px 0px;
  }

  #storage .custom_radio {
    width: 120px;
    height: 28px;
    margin: 10px;
    margin: 0;
  }

  #storage .custom_radio label {
    display: flex;
    width: 120px;
    height: 28px;
    margin: 0;
    margin-right: 30px;
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
    width: 24px;
    height: 24px;
    border: 1px solid gainsboro;
    border-radius: 25px;
  }

  #storage .custom_radio label .dotte_border .dotte {
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 25px;
  }

  #storage .custom_radio label input:checked ~ .dotte_border .dotte {
    background-color: #FF7F22;
  }


  #storage .control_wrap {
    margin-top: 20px;
  }

  #storage .control {
    position: relative;
    display: flex;
    width: 48px;
    height: 48px;
    background: transparent;
    margin: 5px;
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
    background-size: 70% 70%;
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
    border-color: white;
  }

  #storage .control[status=c] {
    border-color: gray;
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

  #storage .display_robot {
    position: relative;
    width: 236px;
    height: 320px;
    padding: 0 40px;
  }

  #storage .display_robot [name=robot_img] {
    width: 100%;
    height: 100%;
    background-image: url("..\\..\\public\\img\\biorobots\\male_designer.svg");
  }

</style>