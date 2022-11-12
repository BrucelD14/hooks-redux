import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNoHp] = useState("");

  const { addKontakResult } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };

  useEffect(() => {
    if (addKontakResult) {
        console.log('5. masuk component did update');
      dispatch(getListKontak());
      setNama("");
      setNoHp("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>Add Kontak</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="Nama..."
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="No HP..."
          value={nohp}
          onChange={(event) => setNoHp(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
