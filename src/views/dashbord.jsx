import{
  CRow,CCol,
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavTitle,
  CContainer,
  CCard,CCardBody,CButton,CButtonGroup,CCardFooter,CProgress, CAvatar,
  CTable,CTableBody,CTableHead,CTableHeaderCell,CTableRow,CTableDataCell,
 
  
} from "@coreui/react"
import CIcon from "@coreui/icons-react";
import { CChartLine ,CChartBar} from "@coreui/react-chartjs";
import{cilArrowTop ,cilOptions,cilCloudDownload,cilPeople,cifUs
,cibCcMastercard,cifBr,cibCcVisa,cifIn,cibCcStripe,cifFr,cibCcPaypal,cifPl,cibCcAmex,cibCcApplePay,cifEs} from "@coreui/icons"
import { CChart } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from '@coreui/utils'
import Avatar1 from '../../src/assets/images/avatars/1.jpg'
import Avatar2 from '../../src/assets/images/avatars/2.jpg'
import Avatar3 from '../../src/assets/images/avatars/3.jpg'
import Avatar4 from '../../src/assets/images/avatars/4.jpg'
import Avatar5 from '../../src/assets/images/avatars/5.jpg'
import Avatar6 from '../../src/assets/images/avatars/6.jpg'


const Dashbord = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'مجموع بازدیدها', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'کاربران(کارجو)', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'کاربران(کارفرما)', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'نرخ پرش', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const tableExample = [
    {
      avatar: { src: Avatar1, status: 'success' },
      user: {
        name:'نفیسه عرب',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: Avatar2, status: 'danger' },
      user: {
        name: 'محمد احمدی',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: Avatar3, status: 'warning' },
      user: { name: 'سعید رحمتی', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: Avatar4, status: 'secondary' },
      user: { name: 'زهرا مرادی', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: Avatar5, status: 'success' },
      user: {
        name: 'مهناز میرزایی',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: Avatar6, status: 'danger' },
      user: {
        name: 'مجتبی رضوانی',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
    return ( 
  <CContainer fluid>
  <CRow >
          
   <CCol sm={3}>
    <CWidgetStatsA
      className="mb-4"
      color="primary"
      value={
        <>
          $9.000{' '}
          <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="کاربران"
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>تعداد کارفرمایان</CDropdownItem>
            <CDropdownItem>تعداد کارجویان</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
      chart={
        <CChartLine
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#321fdb',
                data: [65, 59, 84, 84, 51, 55, 40],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>
  <CCol sm={3}>
    <CWidgetStatsA
      className="mb-4"
      color="info"
      value={
        <>
          $9.000{' '}
          <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="آگهی ها"
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
      chart={
        <CChartLine
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#39f',
                data: [1, 18, 9, 17, 34, 22, 11],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>
  <CCol sm={3}>
    <CWidgetStatsA
      className="mb-4"
      color="warning"
      value={
        <>
          $9.000{' '}
          <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="اعضا جدید (کارجو)"
      
      chart={
        <CChartLine
          className="mt-3"
          style={{ height: '70px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40],
                fill: true,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>
  <CCol sm={3}>
    <CWidgetStatsA
      className="mb-4"
      color="danger"
      value={
        <>
          $9.000{' '}
          <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="اعضاجدید (کارفرما)"
      
      chart={
        <CChartBar
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                barPercentage: 0.6,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }}
        />
      }
    />
  </CCol>
</CRow>
<CCard className="mb-4 d-ltr">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                بازدیدها
              </h4>
              <div className="small text-medium-emphasis">نیم سال اول - 1403</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-start">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-start ms-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0 rounded"
                    active={value === 'Month'}
                    
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '200px', marginTop: '40px' }}
            data={{
              labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol xs={4}>
         <CCard>
          <CCardBody className="d-flex bg-light">
             <CAvatar src={Avatar1} size="lg" />
             <div className="d-flex flex-column me-4">
             <span>نفیسه عرب</span>
             <p>nafiseharab14@gmail.com</p>
             <span className="text-warning ">مدیر</span>
             </div>
          </CCardBody>
        </CCard>
       </CCol>
       <CCol xs={4}>
         <CCard>
         <CCardBody className="d-flex bg-light">
             <CAvatar src={Avatar2} size="lg" />
             <div className="d-flex flex-column me-4">
             <span>محمداحمدی</span>
             <p>mohammad@gmail.com</p>
             <span className="text-success">پشتیبان</span>
             </div>
          </CCardBody>
        </CCard>
       </CCol>
       <CCol xs={4}>
         <CCard>
         <CCardBody className="d-flex bg-light">
             <CAvatar src={Avatar3} size="lg" className="border" />
             <div className="d-flex flex-column me-4">
             <span>سعید رحمتی</span>
             <p>saedrahmati@gmail.com</p>
             <span className="text-info ">پشتیبان</span>
             </div>
          </CCardBody>
        </CCard>
       </CCol>

          
      </CRow>
      <CTable align="middle" className="mt-3 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
</CContainer>

     );
}
 
export default Dashbord;