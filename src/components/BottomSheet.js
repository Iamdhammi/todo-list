import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import PropTypes from 'prop-types';

const BottomSheet = ({ children, open, setOpen }) => {
    const refRBSheet = useRef();

    useEffect(() => {
        if(open) {
            refRBSheet.current.open()
        } else {
            refRBSheet.current.close()
        }
    }, [open]);
    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
            wrapper: {
                backgroundColor: "rgba(0,0,0,0.4)",
            },
            container: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                height: 'auto'
            },
            draggableIcon: {
                // backgroundColor: "transparent"
            }
            }}
            onClose={() => setOpen(false)}
        >
            {children}
        </RBSheet>
    );
}
BottomSheet.propTypes = {
    children: PropTypes.any.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default BottomSheet;