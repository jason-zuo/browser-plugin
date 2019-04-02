
const  useStar = (vl = "") => {
    let start = vl.substr(0, 11);
    let hideVl = vl.substr(-11, 11);
    let showVl = start + "***" + hideVl;
    return showVl;
};

export {useStar}
