import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, getListKontak } from "../../actions/kontakAction";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListKontak
    console.log("1. use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      console.log("5. masuk component did update");
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h4>LIST KONTAK</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -{" "}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Hapus
              </button>
            </p>
          );
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
