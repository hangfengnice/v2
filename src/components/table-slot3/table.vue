<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.title">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="col in columns" :key="col.key">
          <template v-if="'render' in col">
            <Render :row="row" :column="col" :index="index" :render="col.render" />
          </template>
          <template v-if="'slot' in col">
            <ScopeSlot :row="row" :column="col" :index="index" :render="col.render" />
          </template>
          <template v-else>
            {{ row[col.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Render from './render'
import ScopeSlot from './slot'

export default {
  name: 'component-table',
  components: {
    Render,
    ScopeSlot
  },
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  provide () {
    return {
      tableRoot: this
    }
  }
}
</script>
<style>
  table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }
  table th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  table td, table th{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>
