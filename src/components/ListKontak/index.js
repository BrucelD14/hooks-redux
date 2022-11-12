import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } =
    useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListKontak
    console.log("1. use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div>
      <h4>LIST KONTAK</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return(
            <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>
          )
        })
      ) : getListKontakLoading ? (
        <i>Loading...</i>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
