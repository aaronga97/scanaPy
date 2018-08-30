import * as React from 'react'
import { SpringGrid, makeResponsive } from 'react-stonecutter'
import { RingLoader } from 'react-spinners'
import { url } from 'inspector'



const Grid = makeResponsive(SpringGrid, { maxWidth: 1920 })


const computerDefault = require('./../assets/img/c_default.png')
const computerDell = require('./../assets/img/c_dell.png')
const computerLiteon = require('./../assets/img/c_liteon.png')
const computerNetgear = require('./../assets/img/c_netgear.png')
const computerOne = require('./../assets/img/c_one.png')
const computerRaspberry = require('./../assets/img/c_raspberry.png')
const computerApple = require('./../assets/img/c_apple.png')
const logoScana = require('./../assets/img/logo.png')
const panel = require('./../assets/img/panel.svg')




type ApiState = {
    name: string
}

type State = {
    dataFromAPI: ApiState
    arrayComputer: any[]
    indexSelected: number
    ports: any[]
}

type Props = {
}

export default class TestAPI extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            dataFromAPI: null,
            indexSelected: null,
            arrayComputer: null,
            ports: null,
        }
    }

    componentDidMount() {

        fetch('http://192.168.112.37:5000/getActiveHosts')
            .then(d => d.json())
            .then(d => {
                this.setState({
                    arrayComputer: d.addressInfo
                })
                console.log(this.state.arrayComputer)
            })
    }

    selectComputer(indexSel) {
        this.setState({
            indexSelected: indexSel
        })
    }

    getVendorImage = (vendor) => {
        let imageSrc: any
        switch (vendor) {
            case 'Apple':
                imageSrc = computerApple
                break
            case 'OnePlus Tech (Shenzhen)':
                imageSrc = computerOne
                break
            case 'Raspberry Pi Foundation':
                imageSrc = computerRaspberry
                break
            case 'Dell':
                imageSrc = computerDell
                break
            case 'Liteon Technology':
                imageSrc = computerLiteon
                break
            default:
                imageSrc = computerDefault
                break
        }
        return imageSrc
    }

    close = () => {
        this.setState({
            ports: null,
        })
    }

    scan = (event) => {
        let url = new URL('http://192.168.112.37:5000/singleScan'),
            params = { ipToScan: this.state.arrayComputer[this.state.indexSelected].ipAddress }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(String(url))
            .then(d => d.json())
            .then(d => {
                this.setState({
                    ports: d.portsInfo,
                })
                console.log(this.state.ports)
            })
    }

    isLoading = () => {
        let loading: string
        if (!this.state.ports) {
            loading = 'loading...'
        } else {
            loading = ''
        }
        return loading
    }

    render() {
        if (!this.state.arrayComputer) return (
            <div>
                <div style={{ marginLeft: '43%', marginRight: '50%', marginTop: '40px' }}>
                    <RingLoader
                        size={250}
                        color={'#c3073f'}
                    />
                </div>
                <h1 style={{  fontStyle: 'Montserrat' , color: '#c3073f', marginTop: '30px', fontSize: '40px' }} className='text-center'>Scana.Py</h1>
            </div>
        )
        return (
            <div>
                <div className='row'>
                    <div style={{
                        backgroundImage: `url(${panel})`
                        , height: '1000px', width: '180px', backgroundSize: 'cover'
                    }}>
                        <h1 style={{ color: 'white', font: 'Montserrat', fontSize: '30px', marginTop: '10px', marginLeft: '10px' }} className='text-center'>SCANA.PY</h1>
                        <img src={logoScana} style={{ width: '140px', marginLeft: '25px' }} />
                        <h2 style={{ color: 'white', font: 'Montserrat', fontSize: '20px', marginTop: '10px', marginLeft: '10px' }} className='text-center'>HACK MTY 2018</h2>
                        <h2 style={{ color: 'white', font: 'Montserrat', fontSize: '20px', marginTop: '10px', marginLeft: '10px' }} className='text-center'>Script Kiddies</h2>
                    </div>
                    <div className='col-7'>
                        <div style={{ marginBottom: '20px' }} ></div>
                        <Grid
                            component='ul'
                            columns={5}
                            columnWidth={245}
                            gutterWidth={5}
                            gutterHeight={20}
                            itemHeight={200}
                            springConfig={{ stiffness: 170, damping: 26 }}
                        >
                            {this.state.arrayComputer.map((num, index) => {
                                return (
                                    <div>
                                        <a href=''
                                            onClick={this.selectComputer.bind(this, index)}
                                            data-toggle='modal'
                                            data-target='#exampleModal'>
                                            {this.getVendorImage}
                                            <img className='computerImage'
                                                src={this.getVendorImage(this.state.arrayComputer[index].vendor)}
                                                key={index.toString()}
                                            />
                                        </a>
                                        <h5 style={{ marginTop: '5px', fontSize: '16px' }}
                                            className='text-center white'>
                                            {this.state.arrayComputer[index].ipAddress}
                                        </h5>
                                    </div>
                                )
                            })}
                        </Grid>
                        <div className='modal fade' id='exampleModal' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                            <div className='modal-dialog' role='document'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h5 className='modal-title' id='exampleModalLabel'>PC # {this.state.indexSelected + 1}</h5>
                                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                            <span aria-hidden='true'>&times;</span>
                                        </button>
                                    </div>
                                    <div className='modal-body'>
                                        <strong>IP: </strong>{this.state.indexSelected && this.state.arrayComputer[this.state.indexSelected].ipAddress}
                                        <br />
                                        <strong>MAC Address: </strong>{this.state.indexSelected && this.state.arrayComputer[this.state.indexSelected].macAddress}
                                        <br />
                                        <strong>Vendor: </strong>{this.state.indexSelected && this.state.arrayComputer[this.state.indexSelected].vendor}
                                        <br />
                                        <br />
                                        {this.state.ports && this.state.ports.map((anObjectMapped, index) => {
                                            return (
                                                <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
                                                    <strong>Port Number: </strong> {anObjectMapped.portNumber} <br /> <strong>Protocol: </strong> {anObjectMapped.protocolType} <br /> <strong>Service: </strong> {anObjectMapped.serviceName} <br /> <strong>State: </strong> {anObjectMapped.stateValue}
                                                </p>
                                            )
                                        })}
                                        {this.state.ports === null && <h5>Scan for more data</h5>}
                                    </div>
                                    <div className='modal-footer'>
                                        <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={this.close}>Close</button>
                                        <button type='button' className='btn btn-primary' onClick={this.scan}>Scan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}