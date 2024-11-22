import "./FactChecker.scss";
import closeIcon from "/assets/closeicon.svg";

function FactChecker({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__content">
          <img
            src={closeIcon}
            alt="Close"
            className="modal__close-icon"
            onClick={onClose}
          />
          <div className="modal__text-container">
            <h1 className="modal__title">Verify with SmartTrust</h1>
            <p className="modal__description">
              <b>Note</b>: The community has responded to this post indicating
              false information. Majority of users are confirming this new
              design is not official, the original Dogecoin design is the only
              verified design. Would you like to learn more?
            </p>
          </div>
          <div className="modal__buttons">
            <button className="button button--cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="button button--learn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactChecker;
