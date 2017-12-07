<template>
  <el-container>
    <el-aside width="70px">
      <el-menu default-active="0" @select="handleSelect">
        <el-menu-item class="machines" v-for="(machine, index) in machines" :key="index" :index="String(index)">
          <span>{{machine.name}}</span>
        </el-menu-item>
        <el-menu-item class="machines" index="custom">
          <span>Custom</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-card>
        <div slot="header">{{name}}<el-button size="mini" style="float: right;" type="primary" @click="onSubmit">WOL</el-button></div>
        <el-form label-width="110px">
          <template v-if="custom">
            <el-form-item label="Mac Address">
              <el-input v-model="mac"></el-input>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="IP Address">{{ip}}</el-form-item>
            <el-form-item label="MAC Address">{{mac}}</el-form-item>
          </template>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    const self = this;
    axios.get('/api/machines').then((res) => {
      self.machines = res.data;
      const machine = self.machines[0];
      self.name = machine.name || '';
      self.ip = machine.ip || '';
      self.mac = machine.mac || '';
    }).catch((error) => {
      self.$notify.error({
        title: 'Send Error',
        message: error.message,
      });
    });
  },
  methods: {
    handleSelect(key) {
      if (key === 'custom') {
        this.name = 'Custom';
        this.custom = true;
      } else {
        this.custom = false;
        const machine = this.machines[key];
        this.name = machine.name;
        this.ip = machine.ip;
        this.mac = machine.mac;
      }
    },
    onSubmit() {
      const self = this;
      axios.get('/api/wol', { params: { mac: this.mac } }).then((res) => {
        self.$notify.info({
          title: 'Info',
          message: res.data.success,
        });
      }).catch((error) => {
        console.log(error.response);
        self.$notify.error({
          title: 'Send Error',
          message: error.message,
        });
      });
    },
  },
  data() {
    return {
      machines: [],
      name: 'None',
      ip: '',
      mac: '',
      custom: false,
    };
  },
};
</script>

<style scoped>
.machines {
  padding-left: 0 !important;
}

.el-main {
  padding-right: 0;
}
</style>
