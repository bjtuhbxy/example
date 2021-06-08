<template>
  <el-row :gutter="24">
    <el-col :span="24">
      <el-row>
        <el-col :span="8">
            主题：
          <el-select v-model="theme" @change="monaco.editor.setTheme(theme)">
            <el-option
              v-for="(item, index) in themes"
              :key="index"
              :label="item"
              :value="item"
              ></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
            语言：
          <el-select v-model="lang" @change="setLanguage">
            <el-option
              v-for="(item, index) in languages"
              :key="index"
              :label="item"
              :value="item"
              ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-card class="box-card">
        <div id="monaco" style="min-height: 600px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script src="./index.js"></script>
<style lang="stylus" scoped>
</style>
