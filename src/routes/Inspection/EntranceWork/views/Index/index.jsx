import React, { Component } from 'react';
import './index.styl';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, Select, Table, Popconfirm } from 'antd';
import {
  SELECT_HOME_WORK_NUM,
}from '../../configs';
import { PageTitle,Module } from '../../../../../components';
import axios from 'axios';
import moment from 'moment';
const FormItem = Form.Item;
const FIRST_PAGE = 0;
const PAGE_SIZE = 6;
  
class Homework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: FIRST_PAGE,
      size: PAGE_SIZE,
      total: 0,  
      data:[],
      range:'',
    };
    this.getGroupList = this.getGroupList.bind(this);
  }
  componentDidMount(){
    this.getGroupList(FIRST_PAGE);
  }
  //获取列表信息
  getGroupList = (page) => {
    const { size ,range} = this.state;
    axios.get(`/api/v1/info/entranceWorkByPage?limit=${size}&page=${page}&range=${range}`)
      .then((res) => {
        if(res && res.status === 200){
          this.setState({
            data: res.data,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //分页
  handlePageChagne = (page) => {
    this.getGroupList(page-1)
  }
  //搜索
  selectActivity = (value) => {
    this.setState({range:SELECT_HOME_WORK_NUM[value].name})
  }
  
  render() {
    const {
      data:{
        data,
        allCount,
        page,
        limit,
      },
    } = this.state;
    const total = allCount
    const current = page+1
    const size = limit
    return (
      <div className="report-page">
        <PageTitle titles={['巡检维护','入廊作业']}>
          {
            <Link to="/inspection/entrance/work/new">
              <Button type="primary"> + 添加入廊作业</Button>
            </Link>
          }       
        </PageTitle>
        <Module>
          <Row>
            <Col span={2}>活动范围：</Col>
            <Col span={4}>
              <Select placeholder="请选择活动范围"
                style={{ width: 220 }}
                onChange={this.selectActivity}
              >
                {
                  SELECT_HOME_WORK_NUM &&
                  SELECT_HOME_WORK_NUM.map(cur => (
                    <Select.Option key={cur.id}
                      value={cur.id}
                    >{cur.name}</Select.Option>
                  ))
                }
              </Select>
            </Col>
            <Col span={2}>
              <Button  
                type="primary" 
                onClick={() => {this.getGroupList(0)}}
              >搜索</Button>
            </Col>
          </Row> 
        </Module>
        <Table
          className="group-list-module"
          bordered
          pagination={{
            current,
            total,
            pageSize: size,
            onChange: this.handlePageChagne,
            showTotal: () => `共${allCount} 条数据`
          }}
          dataSource={data}
          columns={[{
            title: '活动范围',
            dataIndex: 'activity_range',
            render: (text, record) => (record.activity_range && record.activity_range) || '--',
          },{
            title: '排序',
            key: 'tagId',
            render: (text, record) => (record.id && record.id) || '--',
          }, {
            title: '工期',
            key: 'duration',
            render: (text, record) => (record.duration && record.duration) || '--',
          }, {
            title: '创建时间',
            key: 'date',
            render: (text, record) => (record.date && 
              moment(parseInt(record.date)).format('YYYY-MM-DD HH:mm:ss')) || '--',
          }, {
            title: '施工人员数量',
            dataIndex: 'work_number',
            render: (text, record) => (record.work_number && record.work_number) || '--',
          },  {
            title: '评价',
            key: 'evaluation',
            render: (text, record) => (record.evaluation && record.evaluation) || '暂无评价',
          }, {
            title: '操作',
            render: (text, record, index) => (
              <div className="operate-btns"> 
                <Link
                  to="/inspection/entrance/work/new"
                  style={{marginRight:'5px'}}
                >编辑</Link>
                <Link
                  to="/inspection/entrance/work/detail"
                  style={{marginRight:'5px'}}
                >详情</Link>
                <Popconfirm
                  title="确定要删除吗？"
                  onConfirm={()=> {this.deleteGroup(record)}}
                >
                  <Button 
                    type="simple"
                    style={{border:'none',padding:0,color:"#357aff",background:'transparent'}}
                  >删除</Button>
                </Popconfirm>
                <Button 
                  type="simple"
                  style={{border:'none',padding:0,color:"#357aff",background:'transparent'}}
                >评价</Button>
              </div>
            ),
          }]}
        />
      </div>
    );
  }
}

export default Homework;
