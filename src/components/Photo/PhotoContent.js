import React, {useEffect, useState} from 'react';
import useAxios from "../hooks/useAxios";
import PhotoItem from "./PhotoItem";
import useScrollAddLimits from "../hooks/useScrollAddLimits";
import CustomsPortal from "../CustomsPortal";
import useControllerPortal from "../hooks/useControllerPortal";
import ErrorMessageApi from "../ErrorMessageApi";
import {DotLoader} from "react-spinners";

const PhotoContent = () => {
    const {response, error, loading} = useAxios('https://api.slingacademy.com/v1/sample-data/photos?&limit=30');
    const {sliceData} = useScrollAddLimits(response?.photos, 9);
    const [openPortal, setOpenPortal] = useState(false);
    const {...portalData} = useControllerPortal();
    useEffect(()=>{
        if(portalData.showPortal){
            setOpenPortal(true)
        }else {
            setTimeout(()=>{
                setOpenPortal(false)
            },600)
        }
    },[portalData.showPortal,setOpenPortal]);

    useEffect(()=>{
         if(portalData.showPortal){
             document.body.style.overflow = "hidden";
          return () => setTimeout(()=>{
              document.body.style.overflowY = "scroll"
          },800)
         }
    },[portalData.showPortal])
    return (
        <div className={'photo_content'}>
            <div className={'container'}>
                <div className={`row`}>
                    {
                        sliceData &&
                        sliceData.map((item, index) =>
                            <PhotoItem
                                key={index}
                                item={item}
                                portal={portalData}
                                index={index}
                                isActive={openPortal}
                            />
                        )
                    }
                </div>
                {error && <CustomsPortal
                    className={'Error_api_message'}>
                    <ErrorMessageApi message={error.message}/>
                </CustomsPortal>}
                {loading && <CustomsPortal className={'loading'}>
                    <DotLoader color="#36d7b7"/>
                </CustomsPortal>}
            </div>
        </div>
    );
};

export default PhotoContent;