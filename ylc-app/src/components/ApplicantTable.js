import React, { Component} from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import '../App.css';

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName)
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      },
      {
        title: 'Nonprofit Selection',
        dataIndex: 'matchRequest',
        key: 'matchRequest',
        sorter: (a, b) => a.matchRequest.localeCompare(b.matchRequest),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.localeCompare(b.status),
        render: status => (
            <>
              {status.map(tag => {
                let color = tag.length > 7 ? 'volcano' : 'green';
                if (tag === 'Pending') {
                  color = 'gold';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag}
                  </Tag>
                );
              })}
            </>
          ),
      },
      {
        title: 'Action',
        dataIndex: 'email',
        key: 'email',
        render: (text, record) => (
            <Space>
              <a>Match</a>
            </Space>
          )
      },
  {
        title: 'Email Applicant',
        dataIndex: 'email',
        key: 'email',
        render: text => <a href={`mailto:${text}`}>Email</a>
      },
      
      
  ];

function onChange(sorter){
    console.log('params', sorter)
  }

const applicants = [
    {
      "firstName": "Melissa",
      "lastName": "Robertson",
      "email": "melissa.robertson@healthstream.com",
      "matchRequest": "African Leadership",
      "status": ["Pending"],
    },
    {
      "firstName": "Amanda",
      "lastName": "Myers",
      "email": "amanda.myers@healthstream.com",
      "matchRequest": "Best Buddies International / Best Buddies Tennessee",
      "status": ["Matched"],
    },
     ];


export default class NonprofitTable extends Component{
    
    render(){
        return (
            <Table columns={columns} dataSource={applicants} onChange={onChange}/>
        );
    }
}
