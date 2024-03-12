import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";


function MyComponent() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://missionplanner-api.onrender.com/tdata-data');
        setData(response.data);
        setLoading(false);
        setTimeout(fetchData, 50);
      }
      catch(error) {
        setError(error);
        setLoading(false);
        setTimeout(fetchData, 50);
      }
  };
  
   fetchData();
   return () => clearTimeout(fetchData);
  },[]);
const [altitude, setAltitude] = useState(null);  
const [yaw, setYaw] = useState(null);
const [pitch, setPitch] = useState(null);
const [roll, setRoll] = useState(null);
const [batteryVoltage, setBatteryVoltage] = useState(null);
const [batteryCurrent, setBatteryCurrent] = useState(null);
const [batteryTemp, setBatteryTemp] = useState(null);
const [batteryRemainingMinutes, setBatteryRemainingMinutes] = useState(null);
const [vibrationX, setVibrationX] = useState(null);
const [vibrationY, setVibrationY] = useState(null);
const [vibrationZ, setVibrationZ] = useState(null);
const [airspeed, setAirspeed] = useState(null);
const [verticalSpeed, setVerticalSpeed] = useState(null);
const [groundSpeed, setGroundSpeed] = useState(null);
const [distanceTraveled, setDistanceTraveled] = useState(null);
const [distanceFromMovingBase, setDistanceFromMovingBase] = useState(null);
const [waypointDistance, setWaypointDistance] = useState(null);
const [gpsStatus, setGpsStatus] = useState(null);
const [motorControl, setMotorControl] = useState(null);
const [climbRate, setClimbRate] = useState(null);
const [ekfStatus, setEkfStatus] = useState(null);
const [ekfFlags, setEkfFlags] = useState(null);
const [ekfVelocityVariance, setEkfVelocityVariance] = useState(null);
const [ekfCompassVariance, setEkfCompassVariance] = useState(null);
const [ekfHorizontalPositionVariance, setEkfHorizontalPositionVariance] = useState(null);
const [ekfVerticalPositionVariance, setEkfVerticalPositionVariance] = useState(null);
const [ekfTerrainAltitude, setEkfTerrainAltitude] = useState(null);
const [ekfTerrainAltitudeError, setEkfTerrainAltitudeError] = useState(null);
const [navigationRoll, setNavigationRoll] = useState(null);
const [navigationPitch, setNavigationPitch] = useState(null);
const [navigationBearing, setNavigationBearing] = useState(null);
const [altitudeError, setAltitudeError] = useState(null);
const [airspeedError, setAirspeedError] = useState(null);
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
const [terrainCurrentAltitude, setTerrainCurrentAltitude] = useState(null);
const [satelliteCount, setSatelliteCount] = useState(null);
const [gyroX, setGyroX] = useState(null);
const [gyroY, setGyroY] = useState(null);
const [gyroZ, setGyroZ] = useState(null);
const [accelerationX, setAccelerationX] = useState(null);
const [accelerationY, setAccelerationY] = useState(null);
const [accelerationZ, setAccelerationZ] = useState(null);
const [magneticFieldX, setMagneticFieldX] = useState(null);
const [magneticFieldY, setMagneticFieldY] = useState(null);
const [magneticFieldZ, setMagneticFieldZ] = useState(null);

useEffect(() => {
  setAltitude(data?.Target?.input?.alt);
  setYaw(data?.Target?.input?.yaw);
  setPitch(data?.Target?.input?.pitch);
  setRoll(data?.Target?.input?.roll);
  setBatteryVoltage(data?.Target?.input?.battery_voltage);
  setBatteryCurrent(data?.Target?.input?.current);
  setBatteryTemp(data?.Target?.input?.battery_temp);
  setBatteryRemainingMinutes(data?.Target?.input?.battery_remainmin);
  setVibrationX(data?.Target?.input?.vibex);
  setVibrationY(data?.Target?.input?.vibey);
  setVibrationZ(data?.Target?.input?.vibez);
  setAirspeed(data?.Target?.input?.airspeed);
  setVerticalSpeed(data?.Target?.input?.verticalspeed);
  setGroundSpeed(data?.Target?.input?.groundspeed);
  setDistanceTraveled(data?.Target?.input?.distTraveled);
  setDistanceFromMovingBase(data?.Target?.input?.DistFromMovingBase);
  setWaypointDistance(data?.Target?.input?.wp_dist);
  setGpsStatus(data?.Target?.input?.gps);
  setMotorControl(data?.Target?.input?.motor_control);
  setClimbRate(data?.Target?.input?.climbrate);
  setEkfStatus(data?.Target?.input?.ekfstatus);
  setEkfFlags(data?.Target?.input?.ekfflags);
  setEkfVelocityVariance(data?.Target?.input?.ekfvelv);
  setEkfCompassVariance(data?.Target?.input?.ekfcompv);
  setEkfHorizontalPositionVariance(data?.Target?.input?.ekfposhor);
  setEkfVerticalPositionVariance(data?.Target?.input?.ekfposvert);
  setEkfTerrainAltitude(data?.Target?.input?.ekfteralt);
  setNavigationRoll(data?.Target?.input?.nav_roll);
  setNavigationPitch(data?.Target?.input?.nav_pitch);
  setNavigationBearing(data?.Target?.input?.nav_bearing);
  setAltitudeError(data?.Target?.input?.alt_error);
  setAirspeedError(data?.Target?.input?.aspd_error);
  setLatitude(data?.Target?.input?.lat);
  setLongitude(data?.Target?.input?.lng);
  setTerrainCurrentAltitude(data?.Target?.input?.ter_curalt);
  setSatelliteCount(data?.Target?.input?.satcount);
  setGyroX(data?.Target?.input?.gx);
  setGyroY(data?.Target?.input?.gy);
  setGyroZ(data?.Target?.input?.gz);
  setAccelerationX(data?.Target?.input?.ax);
  setAccelerationY(data?.Target?.input?.ay);
  setAccelerationZ(data?.Target?.input?.az);
  setMagneticFieldX(data?.Target?.input?.mx);
  setMagneticFieldY(data?.Target?.input?.my); 
  setMagneticFieldZ(data?.Target?.input?.mz);
}, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const inputStyle={
    padding:"5px 18px",
    fontSize:"18px",
    borderRadius:"10px",
    width:"50%",
    outline:"none",
    cursor:"none",


  }

  return (
    
    <div>
      <div className="container">
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
        <table>
          <tr>
            <td style={{color:"white"}}>Altitude:</td>
            <td><input type="text" id="altitudeTextBox" value={altitude} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Yaw:</td>
            <td><input type="text" id="yawTextBox" value={yaw} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Pitch:</td>
            <td><input type="text" id="pitchTextBox" value={pitch} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Roll:</td>
            <td><input type="text" id="rollTextBox" value={roll} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Battery voltage:</td>
            <td><input type="text" id="batteryVoltageTextBox" value={batteryVoltage} style={inputStyle}></input></td>
          </tr>

        </table>
      </div></div></div>
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
     <table>
      <tr>
        <td style={{color:"white"}}>Battery Current:</td>
        <td><input type="text" id="batteryCurrentTextBox" value={batteryCurrent} style={inputStyle}></input></td>
      </tr>
      <tr>
        <td style={{color:"white"}}>Battery Temp:</td>
        <td><input type="text" id="batteryCurrentTextBox" value={batteryTemp} style={inputStyle}></input></td>
      </tr>
      <tr>
        <td style={{color:"white"}}>Battery Remaining Minutes :</td>
        <td><input type="text" id="batteryRemainingMinutesTextBox" value={batteryRemainingMinutes} style={inputStyle}></input></td>
      </tr>
      <tr>
        <td style={{color:"white"}}>GPS Status:</td>
        <td><input type="text" id="gpsStatusTextBox" value={gpsStatus} style={inputStyle}></input></td>
      </tr>
      <tr>
        <td style={{color:"white"}}>Motor Control:</td>
        <td><input type="text" id="motorControlTextBox" value={motorControl} style={inputStyle}></input></td>
      </tr>
     </table>
      </div></div></div>
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
        <table>
          <tr>
            <td style={{color:"white"}}>Vibration X:</td>
            <td><input type="text" id="vibrationXTextBox" value={vibrationX} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Vibration Y:</td>
            <td> <input type="text" id="vibrationYTextBox" value={vibrationY} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Vibration Z:</td>
            <td><input type="text" id="vibrationXTextBox" value={vibrationZ} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Airspeed:</td>
            <td><input type="text" id="airspeedTextBox" value={airspeed} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Vertical speed:</td>
            <td> <input type="text" id="verticalSpeedTextBox" value={verticalSpeed} style={inputStyle}></input></td>
          </tr>
          
        </table>

      </div></div></div>
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
        <table>
          <tr>
            <td style={{color:"white"}}>Ground speed:</td>
            <td><input type="text" id="groundSpeedTextBox" value={groundSpeed} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Distance Traveled:</td>
            <td><input type="text" id="distanceTraveledTextBox" value={distanceTraveled} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Distance moving from Base:</td>
            <td><input type="text" id="distanceFromMovingBaseTextBox" value={distanceFromMovingBase} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Waypoint Distance:</td>
            <td><input type="text" id="waypointDistanceTextBox" value={waypointDistance} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Cilmb Rate:</td>
            <td><input type="text" id="climbRateTextBox" value={climbRate} style={inputStyle}></input></td>
          </tr>
        </table>
      </div></div></div>

    </div>
      <div className="container">
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
      <table>
          <tr>
            <td style={{color:"white"}}>EKF status:</td>
            <td><input type="text" id="ekfStatusTextBox" value={ekfStatus} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>EKF flags:</td>
            <td><input type="text" id="ekfFlagsTextBox" value={ekfFlags} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>EKF velocity Variance:</td>
            <td><input type="text" id="ekfVelocityVarianceTextBox" value={ekfVelocityVariance} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>EKF Horizontal Position Variance:</td>
            <td><input type="text" id="ekfHorizontalPositionVarianceTextBox" value={ekfHorizontalPositionVariance} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Airspeed Error:</td>
            <td><input type="text" id="airspeedErrorTextBox" value={airspeedError} style={inputStyle}></input></td>
          </tr>
        </table>
      </div></div></div>
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
      <table>
          <tr>
            <td style={{color:"white"}}>EKF Vertical Position Variance:</td>
            <td><input type="text" id="ekfVerticalPositionVarianceTextBox" value={ekfVerticalPositionVariance} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>EKF Terrain Altitude:</td>
            <td> <input type="text" id="ekfTerrainAltitudeTextBox" value={ekfTerrainAltitude} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Navigation Roll:</td>
            <td><input type="text" id="navigationRollTextBox" value={navigationRoll} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Navigation Pitch:</td>
            <td><input type="text" id="navigationPitchTextBox" value={navigationPitch} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Navigation Bearing:</td>
            <td><input type="text" id="navigationBearingTextBox" value={navigationBearing} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Altitude Error: :</td>
            <td><input type="text" id="altitudeErrorTextBox" value={altitudeError} style={inputStyle}></input></td>
          </tr>
        </table>
        </div></div></div>
        <div className="Quarter-width">
        <div className="trbox">
      <div className="grbox">
        <table>
          <tr>
            <td style={{color:"white"}}>Latitude:</td>
            <td><input type="text" id="latitudeTextBox" value={latitude} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Longitude:</td>
            <td> <input type="text" id="longitudeTextBox" value={longitude} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Terrain Current Altitude:</td>
            <td><input type="text" id="terrainCurrentAltitudeTextBox" value={terrainCurrentAltitude} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Magnetic Field X:</td>
            <td><input type="text" id="magneticFieldXTextBox" value={magneticFieldX} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Magnetic Field Y:</td>
            <td><input type="text" id="magneticFieldYTextBox" value={magneticFieldY} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Magnetic Field Z:</td>
            <td><input type="text" id="magneticFieldZTextBox" value={magneticFieldZ} style={inputStyle}></input></td>
          </tr>
        </table>
        </div></div></div>
      <div className="Quarter-width">
      <div className="trbox">
      <div className="grbox">
      <table>
          <tr>
            <td style={{color:"white"}}>Satellite Count:</td>
            <td><input type="text" id="satelliteCountTextBox" value={satelliteCount} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Gyro X:</td>
            <td> <input type="text" id="gyroXTextBox" value={gyroX} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Gyro Y:</td>
            <td> <input type="text" id="gyroYTextBox" value={gyroY} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Gyro Z:</td>
            <td> <input type="text" id="gyroZTextBox" value={gyroZ} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Magnetic Field Y:</td>
            <td><input type="text" id="magneticFieldYTextBox" value={magneticFieldY} style={inputStyle}></input></td>
          </tr>
          <tr>
            <td style={{color:"white"}}>Acceleration X:</td>
            <td><input type="text" id="accelerationXTextBox" value={accelerationX} style={inputStyle}></input></td>
          </tr>
        </table>
        </div></div></div>
    </div>
    </div>
  );
}

export default MyComponent;