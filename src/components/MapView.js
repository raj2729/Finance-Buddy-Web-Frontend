// import React, { useEffect, useRef } from "react";
// import L from "leaflet";

// const style = {
//     width: "100%",
//     height: "300px"
// };

// function Map({ markerPosition }) {
//     // create map
//     const mapRef = useRef(null);
//     useEffect(() => {
//         mapRef.current = L.map("map", {
//             center: [49.8419, 24.0315],
//             zoom: 16,
//             layers: [
//                 L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
//                     attribution:
//                         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 })
//             ]
//         });
//     }, []);

//     // add marker
//     const markerRef = useRef(null);
//     useEffect(
//         () => {
//             if (markerRef.current) {
//                 markerRef.current.setLatLng(markerPosition);
//             } else {
//                 markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
//             }
//         },
//         [markerPosition]
//     );

//     return <div id="map" style={style} />;
// }

// export default Map;
import React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Tooltip,
    Polyline,
    CircleMarker
} from "react-leaflet";

class MapView extends React.Component {
    constructor() {
        super();
        this.mapRef = React.createRef();
        this.state = {
            lat: 51.315,
            lng: -0.09,
            zoom: 13,
            positions: [
                {
                    lat: 51.315,
                    lng: -0.09,
                    zoom: 13
                },
                {
                    lat: 51.305,
                    lng: -0.09,
                    zoom: 13
                },
                {
                    lat: 51.325,
                    lng: -0.09,
                    zoom: 13
                }
            ]
        };
    }
    componentDidMount() { }
    zoomOut = () => {
        const map = this.mapRef.current;
        if (map != null) {
            map.leafletElement.zoomOut();
        }
    };
    zoomOut() {
        alert("zoomOut");
        window.map = this.map;
        this.map.setZoom(0);
        //this.setState({ ...this.state, zoom: this.state.zoom - 1 });
    }

    renderPositions(positions) {
        return (
            <>
                <Polyline color="#220bb9" positions={positions} />
                {positions.map((position, index) => (
                    <CircleMarker
                        key={index}
                        center={position}
                        fill={true}
                        color="#220bb9"
                        radius={3}
                    >
                        <Popup>
                            <b>lat:</b> {position.lat} <br />
                            <b>lng:</b> {position.lng} <br />
                        </Popup>
                    </CircleMarker>
                ))}
            </>
        );
    }
    render() {
        const center = { lat: 51.515, lng: -0.09 };
        const positions = [
            { lat: 51.505, lng: -0.09 },
            { lat: 51.51, lng: -0.1 },
            { lat: 51.51, lng: -0.12 }
        ];
        return (
            <MapContainer
                ref={this.mapRef}
                onContextmenu={() => this.zoomOut()}
                center={center}
                zoom={this.state.zoom}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        <b>lat:</b> {center.lat} <br />
                        <b>lng:</b> {center.lng} <br />
                    </Popup>
                    <Tooltip direction="auto" offset={[0, 10]} opacity={1}>
                        toolTip
                    </Tooltip>
                </Marker>
                {this.renderPositions(positions)}
            </MapContainer>
        );
    }
}

export default MapView;