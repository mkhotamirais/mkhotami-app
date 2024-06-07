import { FaCircleXmark } from "react-icons/fa6";
import { Input, Label, Textarea } from "../../../../components/Tags";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetKamusByIdQuery, useUpdateKamusMutation } from "../../../../app/api/kamusApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import { Err, Loading } from "../../../../components/Components";

const AdmKamusUpdate = () => {
  const { id } = useParams();
  const { data: kamus, isLoading: loadData, isError, isSuccess, error } = useGetKamusByIdQuery(id);
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");
  const [reference, setReference] = useState([]);
  const [refName, setRefName] = useState("");
  const [refLink, setRefLink] = useState("");
  const [updateKamus, { isLoading }] = useUpdateKamusMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (kamus) {
      setName(kamus?.name);
      setMeaning(kamus?.meaning);
      setReference(kamus?.reference);
    }
  }, [kamus]);

  const handleAddRef = () => {
    if (refName === "" || !refName || refLink === "" || !refLink) {
      toast("Nama dan link referensi tidak boleh kosong", { icon: <FaExclamationCircle className="text-yellow-500" /> });
      return;
    }
    if (reference.find((item) => item.refName === refName)) {
      toast.error("Nama referensi sudah ada");
    } else {
      setReference((prev) => [...prev, { refName, refLink }]);
      setRefName("");
      setRefLink("");
      toast.success(`referensi berhasil ditambah`);
    }
  };

  const handleDeleteRef = (name) => {
    setReference((prev) => prev.filter((item) => item?.name !== name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (refName || refName !== "" || refLink || refLink !== "") {
      toast("Input referensi masih terisi", { icon: <FaExclamationCircle className="text-yellow-500" /> });
      return;
    }
    const data = { id, name, meaning, reference };
    updateKamus(data)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        navigate(-1);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  let content;
  if (loadData) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    content = (
      <div>
        <div>Update</div>
        <form onSubmit={handleSubmit}>
          <Label id="name">name</Label>
          <Input type="text" value={name} autoFocus={true} onChange={(e) => setName(e.target.value)} />
          <Label id="meaning">meaning</Label>
          <Textarea id="meaning" value={meaning} onChange={(e) => setMeaning(e.target.value)} />
          <Label id="reference">reference</Label>
          <div className="border rounded p-2">
            <Label id="refName">Reference Name</Label>
            <Input id="refName" value={refName} onChange={(e) => setRefName(e.target.value)} />
            <Label id="refLink">Reference Link</Label>
            <Input id="refLink" value={refLink} onChange={(e) => setRefLink(e.target.value)} />
            <button
              type="button"
              onClick={handleAddRef}
              className="text-xs bg-cyan-500 text-white p-1 px-2 rounded hover:opacity-70"
            >
              Add Reference
            </button>
            {reference.map((item, i) => (
              <div key={i} className="border rounded p-1 mb-1 flex justify-between text-sm my-2">
                <div className="mr-2 overflow-x-scroll">
                  <div>Name : {item?.refName}</div>
                  <div>Link : {item?.refLink}</div>
                </div>
                <button onClick={() => handleDeleteRef(item?.name)} className="text-red-500 hover:opacity-70">
                  <FaCircleXmark />
                </button>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-cyan-500 border flex items-center justify-center w-20 rounded p-2 px-3 text-sm hover:opacity-70 my-2"
          >
            {isLoading ? (
              <div className="text-xl">
                <PiSpinner className="animate-spin" />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    );
  }

  return content;
};

export default AdmKamusUpdate;
