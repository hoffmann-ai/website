import React, { useState } from 'react';
import styles from './Tabs.module.scss';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className={styles['tabs__module']}>
      <ul className={styles['tabs__list']}>
        {/* Fonction map à vérifier */}
        {children.map((tab) => (
          <li
            key={tab.props.label}
            className={tab.props.label === activeTab ? styles.current : ''}
          >
            <a
              href='#'
              onClick={(e) => {
                handleClick(e, tab.props.label);
              }}
            >
              <img className={styles.image} src = {tab.props.label}/>
              <h4 className={styles.title}>{tab.props.title}</h4>
            </a>
          </li>
        ))}
      </ul>
      {/* Fonction map à vérifier */}
      {children.map((one) => {
        if (one.props.label === activeTab) {
          return (
            <div key={one.props.label} className={styles.content}>
              {one.props.children}
            </div>
          );
        }
        return '';
      })}
    </div>
  );
};
export default Tabs;
