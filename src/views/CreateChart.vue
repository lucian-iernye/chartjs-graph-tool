<template>
  <Container>
    <section class="create-chart">
      <h1>Create new chart</h1>
      <div class="create-chart__buttons">
        <button class="btn btn-info" @click="showCsvInput">
          From CSV file
        </button>
        <button class="btn btn-primary" @click="showTable">
          Create manually from table
        </button>
      </div>

      <div v-if="isCsv" class="create-chart__csv">
        <form action="">
          <input type="file" @change="showFileName" />
          <p>{{ formPara }}</p>
          <button type="submit">Upload</button>
        </form>
      </div>
      <div v-if="isTable" class="create-chart__table">
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
export default {
  name: "CreateChart",
  components: {
    Container,
  },
  data() {
    return {
      isCsv: false,
      isTable: false,
      formPara: "Drag your files here or click in this area.",
    };
  },
  computed: {},

  methods: {
    showCsvInput() {
      this.isCsv = !this.isCsv;
      this.isTable = false;
    },
    showTable() {
      this.isTable = !this.isTable;
      this.isCsv = false;
    },
    showFileName(e) {
      console.log(e.target.files[0].name);
      this.formPara = `The file ${e.target.files[0].name} is ready.\nPlease press upload.`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/normalization.scss");

.create-chart__buttons {
  margin-top: 50px;
}

.create-chart__csv {
  margin: 30px auto;

  form {
    margin: 30px auto;
    width: 500px;
    height: 200px;
    border: 4px dashed #2c3e50;
    position: relative;
  }
  form p {
    text-align: center;
    line-height: 170px;
    color: #2c3e50;
    font-family: Arial;
  }
  form input {
    outline: none;
    opacity: 0;
  }
  form button {
    margin: 8px auto;
    margin-left: -4px;
    width: 500px;
    height: 35px;
    color: #fff;
    background: #16a085;
    border: none;
    border-radius: 4px;
    border-bottom: 4px solid #117a60;
    transition: all 0.2s ease;
    outline: none;
  }
  form button:hover {
    background: #149174;
    color: #0c5645;
  }
  form button:active {
    border: 0;
  }
}

.create-chart__table {
  border: 1px solid red;
  margin: 30px auto;
  table {
    width: 100%;
    background-color: white;

    tr,
    td,
    table {
      border: 1px solid black;
    }

    tr {
      width: 100%;
    }

    td {
      width: 130px;
      height: 20px;
    }
  }
}
</style>
