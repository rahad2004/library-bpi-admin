"use client";
import React, { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import FindBook from "@/components/FindBook";
import { useDispatch, useSelector } from "react-redux";
import FindTeacher from "@/components/FindTeacher";
import { assignBookTeacher, getBookBySlug } from "@/store/Action";

const AddCardOptions = () => {
  const [modalType, setModalType] = useState("");
  const [bookValues, setBookValues] = useState({});
  const [teacherValues, setTeacherValues] = useState({});
  const [selectedBookNumber, setSelectedBookNumber] = useState("");
  const singleBook = useSelector((state) => state.singleBook);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookBySlug(bookValues.slug));
  }, [bookValues]);

  const closeModal = () => setModalType(null);

  const handleAssign = () => {
    dispatch(
      assignBookTeacher(teacherValues.id, bookValues.id, selectedBookNumber)
    );
  };

  return (
    <>
      {/* Main Card Section */}
      <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-bgl1 dark:bg-bgd1 rounded-xl shadow space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Add Book Card */}
          <div
            onClick={() => setModalType("book")}
            className="relative flex items-center gap-4 p-4 border-2 border-dashed border-borl dark:border-bord rounded-lg cursor-pointer hover:border-blue-500 transition"
          >
            {bookValues.slug && (singleBook.available <= 0) && (
              <div className="flex items-center justify-center absolute top-[0] left-[0] w-full h-full bg-bgl1 dark:bg-bgd1 bg-opacity-70 z-[2]">
                Book is out of stock
              </div>
            )}
            {bookValues?.id ? (
              <>
                <div className="w-20 h-20 flex-shrink-0 bg-bgl1 dark:bg-bgd1 rounded overflow-hidden">
                  {bookValues?.image ? (
                    <img
                      src={bookValues.image}
                      alt={bookValues.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-bgl1 dark:text-bgd1 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bgd1 dark:text-bgl1 line-clamp-1">
                    {bookValues.name}
                  </h3>
                  <p className="text-sm text-bgd1 dark:text-bgl1">
                    Author: {bookValues.author || "N/A"}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <Plus className="w-6 h-6 text-bgd1 dark:text-bgl1" />
                <p className="text-sm text-bgd1 dark:text-bgl1 mt-1">Add Book</p>
              </div>
            )}
          </div>

          {/* Add Teacher Card */}
          <div
            onClick={() => setModalType("teacher")}
            className="flex items-center gap-4 p-4 border-2 border-dashed border-borl dark:border-bord rounded-lg cursor-pointer hover:border-blue-500 transition"
          >
            {teacherValues?.id ? (
              <>
                <div className="w-20 h-20 flex-shrink-0 bg-bgl1 dark:bg-bgd1 rounded overflow-hidden">
                  {teacherValues?.image ? (
                    <img
                      src={teacherValues.image}
                      alt={teacherValues.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-bgl1 dark:text-bgd1 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bgd1 dark:text-bgl1 line-clamp-1">
                    {teacherValues.name}
                  </h3>
                  <p className="text-sm text-bgd1 dark:text-bgl1">
                    Department: {teacherValues.department?.name || "N/A"}
                  </p>
                  <p className="text-sm text-bgd1 dark:text-bgl1">
                    Post: {teacherValues.post?.name || "N/A"}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <Plus className="w-6 h-6 text-bgd1 dark:text-bgl1" />
                <p className="text-sm text-bgd1 dark:text-bgl1 mt-1">Add Teacher</p>
              </div>
            )}
          </div>
        </div>
        {bookValues.bookNumbers?.length > 0 && (
          <>
            <select
              value={selectedBookNumber}
              onChange={(e) => setSelectedBookNumber(e.target.value)}
              className="mt-2 p-2 border rounded"
            >
              <option value="">--Select Book Number--</option>
              {bookValues.bookNumbers.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Submit Button */}
        <button
          onClick={handleAssign}
          className="w-full bg-buttonp hover:bg-buttona text-bgl2 font-semibold py-2 rounded-lg transition"
        >
          Add
        </button>
      </div>

      {/* Modal for Book */}
      {modalType === "book" && (
        <div className="fixed inset-0 z-50 bg-bgl1 dark:bg-bgd1 bg-opacity-60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bgl2 dark:bg-bgd2 rounded-lg p-6 shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 transition"
            >
              <X className="w-6 h-6 text-textl dark:text-textd" />
            </button>
            <FindBook closeModal={closeModal} setBookId={setBookValues} />
          </div>
        </div>
      )}

      {/* Modal for Teacher */}
      {modalType === "teacher" && (
        <div className="fixed inset-0 z-50 bg-bgl1 dark:bg-bgd1 bg-opacity-60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bgl2 dark:bg-bgd2 rounded-lg p-6 shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 transition"
            >
              <X className="w-6 h-6 text-textl dark:text-textd" />
            </button>
            <FindTeacher
              closeModal={closeModal}
              setTeacherValues={setTeacherValues}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddCardOptions;
